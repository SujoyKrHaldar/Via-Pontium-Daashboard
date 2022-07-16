import { FaProjectDiagram } from "react-icons/fa";
import moment from "moment";

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
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Project title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
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

  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "coverPhoto",
    },
    prepare(selection) {
      const { subtitle } = selection;
      const date = moment(subtitle).format("MMMM Do YYYY, h:mm a");
      return Object.assign({}, selection, {
        subtitle: date && `On ${date}`,
      });
    },
  },
};
