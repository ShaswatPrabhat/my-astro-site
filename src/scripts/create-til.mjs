#!/usr/bin/env zx

import { $, quiet, chalk } from "zx";

const dir = argv._[0].toLowerCase().trim();
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

const tils = [];
const directories = fs.readdirSync(`src/content/til/`);
directories.forEach((directory) => {
  const files = fs.readdirSync(`src/content/til/${directory}`);
  tils.push(...files);
});
let max = 0;
tils.forEach((til) => {
  if (Number(til.split(".")[0]) > max) {
    max = Number(til.split(".")[0]);
  }
});
max += 1;
const newFilePath = `${path}/${max}.mdx`;
if (!fs.existsSync(newFilePath)) {
  console.log(chalk.red(`${newFilePath} does not exist`));
  console.log(chalk.green(`Creating ${newFilePath} now`));
  await spinner(chalk.green("Working..."), () => $`sleep 2`);
  await quiet($`touch ${newFilePath}`);
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

  const frontMatter = `---
title: "New TIL"
description: "New TIL created by script"
pubDate: "${formattedDate}"
draft: true
source: "https://www.google.com"
tags: ["${dir}"]
---`;
  await quiet($`echo ${frontMatter} > ${newFilePath}`);
} else {
  console.log(
    chalk.green(`${newFilePath} already exists, Please edit the file`)
  );
}
