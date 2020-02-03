# WebExtension

Web Application Extension Framework
WebExtension is a JavaScript library to customize the browsing web pages. And it allows us to insert and modify the existing page elements without modifiying the source code of the existing web application.

## Getting Started

### Step 1: Prerequisites

You will need:

* [Java 1.8 or later] (https://www.oracle.com/technetwork/java/javase/)
* [Chrome browser] (https://www.google.com/chrome/)
* [Apache Tomcat 9.0.30 or later] (http://tomcat.apache.org/)

### Step 2: Download

1. Download a master ZIP file from the WebExtension website [master.zip] (https://github.com/web-extension/master/archive/master.zip).
2. Unzip it.

    master/
    ├── doc/
    ├── samples/
    ├── webextension.jar
    ├── WebExtension.js
    ├── WebExtensionClient.js
    └── README.md

### Step 3: Set up HttpProxy servlet

1. Go to <TOMCAT install root>/webapps/ROOT/WEB-INF/
2. Open web.xml with your favorit text editor.
3. Add the following entries:

```
  <servlet>
    <servlet-name>webextension-httpproxy-servlet</servlet-name>
    <servlet-class>webextension.HttpProxy</servlet-class>
  </servlet>

  <servlet-mapping>
    <servlet-name>webextension-httpproxy-servlet</servlet-name>
    <url-pattern>/WebExtensionHttpProxy</url-pattern>
  </servlet-mapping>
```

### Step 4: Copy samples folder

1. Copy repo-master/samples into <TOMCAT install root>/webapps/ROOT/ folder.

### Step 5: Run the samples

1. Start the TOMCAT
2. Open http://loclahost:8080/samples/HelloWorld/index.html with Chrome browser.

You will see HelloWorld sample page and Say Hello button will be added on the page.

## Documentation

* [User Guide] (https://github.com/web-extension/master/tree/master/doc/WebExtensionUserGuide.pdf)

## History

Version 0.0.1 (2020-02-03)

## Credits

Developer - Masayuki Otoshi
 
## License

[Apache License 2.0] (http://www.apache.org/licenses/LICENSE-2.0.txt)
