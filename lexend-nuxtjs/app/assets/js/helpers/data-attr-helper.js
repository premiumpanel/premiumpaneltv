// data-attr-helper (ESM)
const typesTesters = {
  string: () => true,
  number: (v) => /^-?\d+(?:\.\d+)?$/.test(v),
  boolean: (v) => v === 'false' || v === 'true'
};
const typesParsers = {
  string: (v) => v,
  number: (v) => parseFloat(v),
  boolean: (v) => v !== 'false'
};

export function parseDataAttr(str = '', schema = {}) {
  const out = {};
  if (!str) return out;
  for (const part of str.split(';')) {
    const match = part.trim().match(/^(.*?):([\s\S]*)$/);
    if (!match) continue;
    let [, key, value] = match;
    key = key.trim();
    value = value.trim();

    for (const typeName in schema) {
      if (schema[typeName].includes(key) && typesTesters[typeName](value)) {
        value = typesParsers[typeName](value);
        break;
      }
    }

    // parse JSON-like values
    if (typeof value === 'string' && /^(\[|\{|anime\.|\"|\'|spring\(|steps\()/.test(value)) {
      try {
        // Ensure anime is available in global scope or context if possible. 
        // Since we can't easily pass it into new Function without arguments, 
        // we rely on window.anime being set (Plugin does this? No, plugin uses provide).
        // Let's try to map it if window.anime exists, or just eval it.
        value = new Function(`return (${value})`)();
      } catch (e) { /* ignore */ }
    }

    out[key] = value;
  }
  return out;
}

export function watchDataAttr(attrName, cb) {
  if (!attrName || typeof cb !== 'function') return { disconnect() { } };

  const runOnElement = (el) => {
    if (!el.hasAttribute || !el.hasAttribute(attrName)) return;
    const token = `--data-attr-${attrName}--`;
    if (el[token]) return;
    el[token] = true;
    try { cb(el) } catch (e) { console.error('[data-attr-helper] cb error', e) }
  };

  // initial pass
  document.querySelectorAll('[' + attrName + ']').forEach(runOnElement);

  // observe DOM changes
  const observer = new MutationObserver((records) => {
    for (const r of records) {
      if (r.target instanceof Element) {
        runOnElement(r.target);
        r.target.querySelectorAll && r.target.querySelectorAll('[' + attrName + ']').forEach(runOnElement);
      }
    }
  });
  observer.observe(document.body, { attributes: true, childList: true, subtree: true, attributeFilter: [attrName] });

  return {
    disconnect() { observer.disconnect(); }
  };
}

// compatibility global
if (typeof window !== 'undefined') {
  window.dataAttrHelpers = { typesTesters, typesParsers, parseDataAttr, watchDataAttr };
}

export default { typesTesters, typesParsers, parseDataAttr, watchDataAttr };