
import integrations_img_1 from "@/assets/images/template/tool-slack.svg";
import integrations_img_2 from "@/assets/images/template/tool-salesforce.svg";
import integrations_img_3 from "@/assets/images/template/tool-stripe.svg";
import integrations_img_4 from "@/assets/images/template/tool-paypal.svg";
import integrations_img_5 from "@/assets/images/template/tool-hubspot.svg";
import integrations_img_6 from "@/assets/images/template/tool-zapier.svg";

interface IntegrationDataType {
    name: string;
    category: string;
    description: string;
    image: string;
    link: string;
}[]


export const integrations_data:IntegrationDataType[] = [
  {
    name: "Slack",
    category: "Productivity",
    description: "Notify your teammates of the latest activities with instant Slack messages.",
    image: integrations_img_1,
    link: "/page-integrations",
  },
  {
    name: "Salesforce",
    category: "CRM",
    description: "Leave a lasting impression all done inside Salesforce CPQ platform.",
    image: integrations_img_2,
    link: "/page-integrations",
  },
  {
    name: "Stripe",
    category: "Payment",
    description: "Collect credit card and ACH payments within your sales documents.",
    image: integrations_img_3,
    link: "/page-integrations",
  },
  {
    name: "PayPal",
    category: "Payment",
    description: "Provide a world-class checkout experience for your customers.",
    image: integrations_img_4,
    link: "/page-integrations",
  },
  {
    name: "HubSpot",
    category: "CRM",
    description: "Expand the ROI from your CRM and unlock easy generation and capabilities.",
    image: integrations_img_5,
    link: "/page-integrations",
  },
  {
    name: "Zapier",
    category: "Integration platforms",
    description: "Create custom, automated workflows using your favorite Zaps.",
    image: integrations_img_6,
    link: "/page-integrations",
  },
];
