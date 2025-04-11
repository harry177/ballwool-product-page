import { ProductDropdownProps } from "@/components/ProductDropdown";
import { paymentIconsData } from "./paymentIconsData";
import { socialIconsData } from "./socialIconsData";
import { graphData } from "./graphData";

export const dropdownData: ProductDropdownProps[] = [
  {
    title: "CUSTOMER PROTECTION",
    borderBottom: true,
    text: "At Ballwool, your satisfaction is our priority. If your order doesn’t go as planned, we’ll ensure you get your money back on all eligible purchases - no worries, no hassle",
    label: {
      icon: "shield.svg",
      content: "Ballwool Purchase Protection",
    },
    learnMore: true,
  },
  {
    title: "PRICE HISTORY",
    borderBottom: true,
    text: "Track the price history of your favorite products over the past months to find the best deals and make smarter buying decisions",
    graph: graphData,
  },
  {
    title: "SHIPPING & RETURNS",
    borderBottom: true,
    list: [
      "Professional worldwide delivery, monitored by our logistics experts",
      "Shipping fees, duties and taxes are included in the price",
      "30-day free returns (except made-to-order items)",
    ],
    learnMore: true,
  },
  {
    title: "PAYMENT METHODS",
    borderBottom: true,
    iconType: "payment",
    iconList: paymentIconsData,
  },
  {
    title: "SHARE",
    borderBottom: false,
    iconType: "social",
    iconList: socialIconsData,
  },
];
