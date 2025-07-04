import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Blog = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const fullTexts = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam nobis earum id perferendis corrupti vel fugiat veritatis eum saepe modi dolore, nihil expedita, nisi, amet debitis nesciunt fugit deleniti quae. Illum amet accusantium ut dolorum ab laboriosam, quidem provident, consequatur repellendus, vero cumque nam! At voluptatem alias commodi amet.",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, praesentium error. At ducimus, ex a iure amet nihil eligendi labore odit, sit officiis fugit dolorem soluta, animi laboriosam. Est quaerat similique vero natus voluptate voluptatum, obcaecati tempora sunt a molestiae cum. Recusandae beatae corrupti et
