import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { BookOpen } from "lucide-react";
import { PlugZap } from "lucide-react";
import { MessageSquareCode } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";

export const navItems = [
  { label: "Social", href: "#" },
  { label: "Community", href: "#" },
  { label: "Events", href: "#" },
  { label: "Projects", href: "#" },
  { label: "AboutUs", href: "#" },
];

export const testimonials = [
  {
    user: "Nevin Bali",
    company: "Maharaja Surajmal Institute of Technology",
    image: user1,
    text: "Spark has been a game-changer for me! Not only does it keep me updated with the latest events and workshops, but it has also helped me sharpen my development skills through various learning resources. ",
  },
  {
    user: "Soumya Tripathi",
    company: "Bhartiya Vidyapeeth College",
    image: user2,
    text: "The Spark platform has transformed the way I learn and collaborate.It's also great for improving coding skills through challenges. and I love how easy it is to connect with other teams for cross-functional projects.",
  },
  {
    user: "Rajesh Yadav",
    company: "Delhi University",
    image: user3,
    text: "Before Spark, I struggled to keep up with college events and workshops. Now, I’m always in the loop! The platform also offers fantastic resources to boost my development skills and interacting with different teams has helped me",
  },
  {
    user: "Sanidhya Vats",
    company: "Delhi University",
    image: user4,
    text: "Spark is amazing! It provides all the event details right on my dashboard, so I never miss anything important. The development tutorials and challenges have improved my coding abilities significantly. ",
  },
  {
    user: "David Johnson",
    company: "Delhi University",
    image: user5,
    text: "Spark has really helped me grow as a student. The platform is always up-to-date with campus events, which is super convenient. I’ve also been able to practice my development skills and even learn from students in other teams.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Chat-Bot ",
    description:
      "A chatbot that guides students during hackathons, assists with team formation, and connects them with mentors",
  },
  {
    icon: <BookOpen />,
    text: "Inter-Community Platform",
    description:
      "Support for college societies to manage their chapters and share resources across institutions seamlessly",
  },
  {
    icon: <MessageSquareCode />,
    text: "Open Source-Projects",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Events ",
    description:
      "Instant alerts for upcoming hackathons, coding contests, and tech events to keep participants informed",
  },
  {
    icon: <PlugZap />,
    text: "Social-Blog",
    description:
      "A Quora-like space for students to share knowledge, seek advice, and form collaborative teams",
  },
];

export const checklistItems = [
  {
    title: "Coding becomes easy!",
    description:
      "Contributing to the open source projects and make yourself skilled .",
  },
  {
    title: "Stay Updated",
    description:
      "Make teams, Read blogs in social and come up with your own team by staying updated from Events section",
  },
  {
    title: "AI Assistance to reduce time",
    description: "Have a doubt?? Here comes our integrated Chatbot in play",
  },
  {
    title: "Share work in minutes",
    description:
      "Share yoppur own work and help others to establish a strong community of developers!!",
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
