


import feature_img_1 from "@/assets/images/integrations/mailchimp.png";
import feature_img_2 from "@/assets/images/integrations/asana.png";
import feature_img_3 from "@/assets/images/integrations/zapier.png";
import feature_img_4 from "@/assets/images/integrations/bitbucket.png";
import feature_img_5 from "@/assets/images/integrations/stripe.png";
import feature_img_6 from "@/assets/images/integrations/drive.png";
import feature_img_7 from "@/assets/images/integrations/dropbox.png";
import feature_img_8 from "@/assets/images/integrations/slack.png";
import feature_img_9 from "@/assets/images/integrations/paypal.png";
import feature_img_10 from "@/assets/images/integrations/bitbucket.png";
import feature_img_11 from "@/assets/images/integrations/stripe.png";
import feature_img_12 from "@/assets/images/integrations/monday.png";
import feature_img_13 from "@/assets/images/integrations/hubspot.png";
import feature_img_14 from "@/assets/images/integrations/asana.png";
import feature_img_15 from "@/assets/images/integrations/slack.png";
import feature_img_16 from "@/assets/images/integrations/bitbucket.png";
import feature_img_17 from "@/assets/images/integrations/dropbox.png";
import feature_img_18 from "@/assets/images/integrations/drive.png";
import feature_img_19 from "@/assets/images/integrations/paypal.png";
import feature_img_20 from "@/assets/images/integrations/stripe.png";
import feature_img_21 from "@/assets/images/integrations/monday.png";
import feature_img_22 from "@/assets/images/integrations/saleforce.png";
import feature_img_23 from "@/assets/images/integrations/mailchimp.png";
import feature_img_24 from "@/assets/images/integrations/zapier.png";
import feature_img_25 from "@/assets/images/integrations/saleforce.png";
import feature_img_26 from "@/assets/images/integrations/drive.png";
import feature_img_27 from "@/assets/images/integrations/zapier.png";
import feature_img_28 from "@/assets/images/integrations/bitbucket.png";
import feature_img_29 from "@/assets/images/integrations/asana.png";
import feature_img_30 from "@/assets/images/integrations/monday.png";

export default interface Integration {
  name: string;
  description: string;
  image: string;
  link: string;
}

export interface FeaturesData {
  header: {
    subtitle: string;
    title: string;
    highlighted: string;
    description: string;
  };
  categories: string[];
  integrations: Integration[][];
  browseAll: {
    text: string;
    link: string;
  };
}

export const featuresData: FeaturesData = {
  header: {
    subtitle: "Integrations",
    title: "AI Automation across 500+ apps",
    highlighted: "AI Automation",
    description: "See how we help your team solve today's biggest challenges."
  },
  categories: [
    "Marketing Automation",
    "Scheduling",
    "Project Management",
    "Finance",
    "Spreadsheets"
  ],
  integrations: [
    // Marketing Automation
    [
      {
        name: "Mailchimp",
        description: "Share your ideas with Mailchimp email newsletters.",
        image: feature_img_1,
        link: "/features"
      },
      {
        name: "Asana",
        description: "Leading work management from daily tasks to strategic initiatives.",
        image: feature_img_2,
        link: "/features"
      },
      {
        name: "Zapier",
        description: "Send and receive email via a custom Zapier.",
        image: feature_img_3,
        link: "/features"
      },
      {
        name: "Bitbucket",
        description: "File sync app that lets you store all of your files online.",
        image: feature_img_4,
        link: "/features"
      },
      {
        name: "Stripe",
        description: "Developer-friendly way to accept payments online and in mobile apps.",
        image: feature_img_5,
        link: "/features"
      },
      {
        name: "Google Drive",
        description: "File sync app that lets you store all of your files online.",
        image: feature_img_6,
        link: "/features"
      }
    ],
    // Scheduling
    [
      {
        name: "Dropbox",
        description: "Store your files online, sync them to all your devices.",
        image: feature_img_7,
        link: "/features"
      },
      {
        name: "Slack",
        description: "File sync app that lets you store all of your files online.",
        image: feature_img_8,
        link: "/features"
      },
      {
        name: "Paypal",
        description: "File sync app that lets you store all of your files online.",
        image: feature_img_9,
        link: "/features"
      },
      {
        name: "Bitbucket",
        description: "File sync app that lets you store all of your files online.",
        image: feature_img_10,
        link: "/features"
      },
      {
        name: "Stripe",
        description: "Developer-friendly way to accept payments online and in mobile apps.",
        image: feature_img_11,
        link: "/features"
      },
      {
        name: "Monday",
        description: "File sync app that lets you store all of your files online.",
        image: feature_img_12,
        link: "/features"
      }
    ],
    // Project Management
    [
      {
        name: "Hubspot",
        description: "All-in-one stop for all of your marketing software needs.",
        image: feature_img_13,
        link: "/features"
      },
      {
        name: "Asana",
        description: "Leading work management from daily tasks to strategic initiatives.",
        image: feature_img_14,
        link: "/features"
      },
      {
        name: "Slack",
        description: "Send and receive email via a custom Zapier.",
        image: feature_img_15,
        link: "/features"
      },
      {
        name: "Bitbucket",
        description: "File sync app that lets you store all of your files online.",
        image: feature_img_16,
        link: "/features"
      },
      {
        name: "Dropbox",
        description: "Store your files online, sync them to all your devices.",
        image: feature_img_17,
        link: "/features"
      },
      {
        name: "Google Drive",
        description: "File sync app that lets you store all of your files online.",
        image: feature_img_18,
        link: "/features"
      }
    ],
    // Finance
    [
      {
        name: "Paypal",
        description: "File sync app that lets you store all of your files online.",
        image: feature_img_19,
        link: "/features"
      },
      {
        name: "Stripe",
        description: "Developer-friendly way to accept payments online and in mobile apps.",
        image: feature_img_20,
        link: "/features"
      },
      {
        name: "Monday",
        description: "Send and receive email via a custom Zapier.",
        image: feature_img_21,
        link: "/features"
      },
      {
        name: "Salesforce",
        description: "Leading enterprise customer relationship manager (CRM) app.",
        image: feature_img_22,
        link: "/features"
      },
      {
        name: "Mailchimp",
        description: "Share your ideas with Mailchimp email newsletters.",
        image: feature_img_23,
        link: "/features"
      },
      {
        name: "Zapier",
        description: "File sync app that lets you store all of your files online.",
        image: feature_img_24,
        link: "/features"
      }
    ],
    // Spreadsheets
    [
      {
        name: "Salesforce",
        description: "Leading enterprise customer relationship manager (CRM) app.",
        image: feature_img_25,
        link: "/features"
      },
      {
        name: "Google Drive",
        description: "File sync app that lets you store all of your files online.",
        image: feature_img_26,
        link: "/features"
      },
      {
        name: "Zapier",
        description: "Send and receive email via a custom Zapier.",
        image: feature_img_27,
        link: "/features"
      },
      {
        name: "Bitbucket",
        description: "File sync app that lets you store all of your files online.",
        image: feature_img_28,
        link: "/features"
      },
      {
        name: "Asana",
        description: "Leading work management from daily tasks to strategic initiatives.",
        image: feature_img_29,
        link: "/features"
      },
      {
        name: "Monday",
        description: "File sync app that lets you store all of your files online.",
        image: feature_img_30,
        link: "/features"
      }
    ]
  ],
  browseAll: {
    text: "Browse all integrations",
    link: "/integrations"
  }
};