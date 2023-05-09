#!/usr/bin/env zx

import { $, quiet, chalk } from "zx";

const newFilePath = "src/content/notes/new-note.mdx";
const currentDate = new Date();
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dev",
];

let formattedDate = `${
  months[currentDate.getMonth()]
} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

await quiet($`touch ${newFilePath}`);

const frontMatter = `---
title: "New Note"
description: "New Note created by script"
pubDate: "${formattedDate}"
heroImage: "/placeholder-hero.jpg"
draft: true
---`;

await spinner("working...", () => $`sleep 2`);

await quiet($`echo ${frontMatter} > ${newFilePath}`);

console.log(
  chalk.blue("New Note successfully created at ") +
    chalk.red.bgBlue.bold(`${newFilePath}`)
);
