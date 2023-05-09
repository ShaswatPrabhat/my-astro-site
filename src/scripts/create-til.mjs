#!/usr/bin/env zx

import { $, quiet, chalk } from "zx";

const dir = argv._[0].toLowerCase();
const path = `src/content/til/${dir}`;

if (!fs.existsSync(path)) {
  console.log(chalk.red(`${dir} does not exist`));
  console.log(chalk.green(`Creating ${dir} now`));
  await spinner(chalk.green("Working..."), () => $`sleep 2`);
  fs.mkdirSync(path);
} else {
  console.log(chalk.red(`${dir} already exists`));
}
console.log(chalk.green(`Creating the new TIL file now`));
const currentDate = new Date();
let dd = currentDate.getDate();
let mm = currentDate.getMonth();
const yyyy = currentDate.getFullYear();
if (dd < 10) dd = "0" + dd;
if (mm < 10) mm = "0" + mm;
const formattedDate = `${dd}_${mm}_${yyyy}`;
const newFilePath = `${path}/${formattedDate}.mdx`;

if (!fs.existsSync(newFilePath)) {
  console.log(chalk.red(`${newFilePath} does not exist`));
  console.log(chalk.green(`Creating ${newFilePath} now`));
  await spinner(chalk.green("Working..."), () => $`sleep 2`);
  await quiet($`touch ${newFilePath}`);
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

  const frontMatter = `---
title: "New TIL"
description: "New TIL created by script"
pubDate: "${formattedDate}"
draft: true
source: ""
---`;
  await quiet($`echo ${frontMatter} > ${newFilePath}`);
} else {
  console.log(
    chalk.green(`${newFilePath} already exists, Please edit the file`)
  );
}