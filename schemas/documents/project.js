import { FaProjectDiagram } from "react-icons/fa";

export default {
  name: "project",
  title: "Project",
  icon: FaProjectDiagram,
  type: "document",
  fields: [
    {
      name: "coverPhoto",
      title: "Cover photo",
      type: "image",
    },
    {
      name: "title",
      title: "Project title",
      type: "string",
    },
    {
      name: "category",
      title: "Project category",
      type: "string",
    },
    {
      name: "assignment",
      title: "Assignment name",
      type: "string",
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "status",
      title: "Status",
      type: "string",
    },
    {
      name: "criticality",
      title: "Criticality",
      type: "text",
    },
    {
      name: "reference",
      title: "Reference",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Published date",
      type: "date",
    },
  ],
};
