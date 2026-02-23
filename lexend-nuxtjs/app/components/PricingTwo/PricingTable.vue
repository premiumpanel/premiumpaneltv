<template>
  <div id="pricing_compare" class="pricing-compare section panel">
    <div class="section-outer panel pb-4 md:pb-6 xl:pb-10">
      <div class="container">
        <div class="section-inner panel vstack gap-4 lg:gap-6 xl:gap-8"
          data-anime="onview: -200; targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: easeOutCubic; duration: 500; delay: anime.stagger(100, {start: 200});">
          <div class="heading vstack gap-2 items-center panel text-center max-w-600px mx-auto">
            <h2 class="title h3 m-0">Let's compare plans and choose what fit your needs!</h2>
          </div>
          <div class="panel p-2 border rounded-1-5 lg:rounded-2 dark:border-gray-600 dark:bg-black">
            <table class="uc-table uc-table-divider">
              <thead class="table-head sticky-top z-1 bg-white text-dark dark:bg-gray-900 dark:text-white">
                <tr class="table-row border-white dark:border-gray-900">
                  <th class="table-header-cell" scope="row">
                    <div class="text-transparent"><span>Nom du forfait</span></div>
                  </th>
                  <th class="table-header-cell w-1/5" scope="col" id="plan-1">
                    <div class="title">
                      <div class="h6 lg:h5 mt-4 mb-2"><span>Free</span></div>
                    </div>
                  </th>
                  <th class="table-header-cell w-1/5" scope="col" id="plan-2">
                    <div class="title">
                      <div class="h6 lg:h5 mt-4 mb-2"><span>Pro</span></div>
                    </div>
                  </th>
                  <th class="table-header-cell w-1/5" scope="col" id="plan-3">
                    <div class="title">
                      <div class="h6 lg:h5 mt-4 mb-2"><span>Business</span></div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="table-body">
                <tr class="table-row table-heading bg-primary-25 dark:bg-gray-700 border-white dark:border-gray-900">
                  <th colspan="4" scope="colgroup">
                    <div class="h6 m-0 text-dark dark:text-white"><span>AI Automation key features</span></div>
                  </th>
                </tr>
                <tr class="table-row border-white dark:border-gray-900">
                  <th scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">Users</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div><span>1 user</span></div>
                  </td>
                  <td>
                    <div><span>5 users</span></div>
                  </td>
                  <td>
                    <div><span>Unlimited users</span></div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">Tracking & notifications</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">Real-time analytics</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">Files uploads</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div><span>1GB</span></div>
                  </td>
                  <td>
                    <div><span>5GB</span></div>
                  </td>
                  <td>
                    <div><span>Unlimited</span></div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">CRM and Zapier integrations</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">Unlimited team workspaces</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">SSO support</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody class="table-body">
                <tr class="table-row table-heading bg-primary-25 dark:bg-gray-700 border-white dark:border-gray-900">
                  <th colspan="4" scope="colgroup">
                    <div class="h6 m-0 text-dark dark:text-white"><span>Products</span></div>
                  </th>
                </tr>
                <tr class="table-row border-white dark:border-gray-900">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">Email Template Builder</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">Landing Page Builder</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">Reporting & analytics</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">E-commerce and retail</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">Large Community</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody class="table-body">
                <tr class="table-row table-heading bg-primary-25 dark:bg-gray-700 border-white dark:border-gray-900">
                  <th colspan="4" scope="colgroup">
                    <div class="h6 m-0 text-dark dark:text-white"><span>Chatbots</span></div>
                  </th>
                </tr>
                <tr class="table-row border-white dark:border-gray-900">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">To-Do List</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">Reports</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">Spreadsheets</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">Collaboration</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">Chatbots</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody class="table-body">
                <tr class="table-row table-heading bg-primary-25 dark:bg-gray-700 border-white dark:border-gray-900">
                  <th colspan="4" scope="colgroup">
                    <div class="h6 m-0 text-dark dark:text-white"><span>AI-Powered Solutions</span></div>
                  </th>
                </tr>
                <tr class="table-row border-white dark:border-gray-900">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">Automation</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span class="cstack w-24px h-24px rounded-circle bg-dark dark:bg-white bg-opacity-10">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">Teaming</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
                <tr class="table-row border-gray-100 dark:border-gray-600">
                  <th class="" scope="row">
                    <div class="hstack gap-1 justify-start">
                      <span class="fs-5 fw-bold text-dark dark:text-white">Use Case</span>
                      <div data-uc-tooltip="The number of users of each plan." tabindex="0" aria-expanded="false"
                        role="tooltip">
                        <i class="icon icon-narrow unicon-information-filled mt-px"></i>
                      </div>
                    </div>
                  </th>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        class="cstack w-24px h-24px rounded-circle bg-primary text-white dark:bg-tertiary dark:text-dark">
                        <i class="icon-narrow unicon-checkmark fw-bold"></i>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>