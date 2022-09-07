---
title: "{{ replace .Name "-" " " | title }}"
description: ""
excerpt: ""
date: {{ .Date }}
lastmod: {{ .Date }}
draft: false
weight: 50
images: ["{{ .Name | urlize }}.jpg"]
categories: [""]
---
z