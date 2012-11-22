# Share Site Extension Project


#### Requirements:

* Alfresco version 4.2.b (or later) http://wiki.alfresco.com/wiki/Download_and_Install_Alfresco
* Apache Ant http://ant.apache.org/


## 1. INTRODUCTION

This is a project template meant to get you quickly up and running with
site based customizations in Alfresco Share.

By entering your company's name, the name of your usecase and some additional parameters
you will get a fully working and namespaced site customization project with ant tasks
for deploying and packaging your site extension.

It will also provide you with sample code for the most common extension points.



## 2. USAGE


### 2.1 Create project


Start by running the "help" command in your console when standing in this directory.

    ant help

It will give detailed instructions on which parameters you need to provide when creating the project.
Once done you will be able to see a directory named after your company placed as a sibling to the this directory.


### 2.2 Configure

Make sure to enter the path to your Alfresco server(s) in the generated build.properties files so the build tasks can deploy
your customization.

**Note!** Use "java paths", in other words use "forward slash" (even on Windows).  
**Note!** Make sure to set it for both your share & repo project.

### 2.3 Deploy

From the directory named after your company run the following commands to deploy the customization
code to your Alfresco server(s).

To deploy repo...

    cd <usecase>-repo
    ant hotcopy-tomcat-zip
    cd ..

To deploy share...

    cd <usecase>-share
    ant hotcopy-tomcat-zip
    cd ..

The `hotcopy-tomcat-zip` is a development build task meant for avoiding server restarts when possible.
It will place all your code will in your server's **${TOMCAT_HOME}/shared/classes** directory (except for client side resources which
will be placed inside your exploded share.war directory, so make sure your server has started and has exploded the **.war**).

Now restart your server.

## 3 Explore your customization

1. Create a new site and make sure to choose your usecase name as the "Type" in Share's create site dialog.  
   (In other words do NOT choose the usual "Collaboration Site")

2. On your new site dashboard you can see:

   a) A 1 column layout with 1 Dashlet inside.  
     # Defined in the `<template-instance>` element & `<components>` section in **&lt;company&gt;-&lt;usecase&gt;-presets.xml**

   b) A custom page displayed in the navigation bar (named after your &lt;page&gt; parameter).  
      # Defined in the `<sitePages>` section in **&lt;company&gt;-&lt;usecase&gt;-presets.xml**

   c) That the "Document Library" has changed name.  
      # Defined in the `<pageMetadata>` section in your **&lt;company&gt;-&lt;usecase&gt;-presets.xml** file  
      # and by `<company>.<usecase>.page.documentlibrary.title` key in your **&lt;company&gt;-&lt;usecase&gt;.properties** file.

3. When entering the custom page you will see:

   a) A page that includes the title, navigation & a custom component.  
      # Defined in your **site-data/pages/&lt;company&gt;-&lt;usecase&gt;-&lt;page&gt;.xml**

   b) A greeting component which is a generated webscript.  
      # Defined in your **site-webscripts/&lt;company&gt;/&lt;usecase&gt;/components/&lt;pageWebscript&gt;.get.*** files

4. In the document library you will see

   a) That your property is added to the sort menu.

   b) An "Apply &lt;usecase&gt; &lt;aspect&gt;" doclib action (if you have "Write" permission).  
      # It will apply the aspect by calling the ootb repo action named "add-features".  
      # The aspect is defined in the repo's **&lt;company&gt;-&lt;usecase&gt;-model.xml**  
      # The action is defined in `<actions>` section in **&lt;company&gt;-&lt;usecase&gt;-extension.xml**

   ... and when the aspect is applied you now have...

  c) An aspect specific doclib metadata template showing your custom property.  
     # Defined in the `<metadata-templates>` section in **&lt;company&gt;-&lt;usecase&gt;-extension.xml**

  d) An indicator showing that your document has the aspect applied and also the value of your property.  
     # Defined in the `<indicators>` section in **&lt;company&gt;-&lt;usecase&gt;-extension.xml**

  e) A "Set &lt;usecase&gt; &lt;property&gt; to &lt;value2&gt;" action (if you have "Write" permission)  
     # It will call a generated custom repo action that will update your custom property on the node.  
     # The property is defined in the repo's **&lt;company&gt;-&lt;usecase&gt;-model.xml**  
     # The action is defined in the `<actions>` section in **&lt;company&gt;-&lt;usecase&gt;-extension.xml**  

   
5. In the "Properties" panel (on the Document Details page) & the "Edit properties" page you will see

   a) That your property can be viewed and edited  
      # Defined in the `<forms>` section in **&lt;company&gt;-&lt;usecase&gt;-config.xml**  

6. In the "Document Actions" panel (on the Document Details page) 

   a) That the doclib actions have been added here as well  
      # Defined in the `<actions>` section in **&lt;company&gt;-&lt;usecase&gt;-extension.xml**  


## 4 Distribution

When your code is ready for distribution just:

1. Use either  
   - `ant dist-jar` and place your jar files in: **${TOMCAT_HOME}/lib** or **${TOMCAT_HOME}/shared/lib**  
      Note! If the shared/lib is missing it must be created and added to tomcat loader as described here:  
      http://docs.alfresco.com/4.0/index.jsp?topic=%2Fcom.alfresco.enterprise.doc%2Ftasks%2Fconfigfiles-change-path.html  
     OR  
   - `ant dist-amp` and use the Alfresco amp tool, described here: https://wiki.alfresco.com/wiki/AMP_Files  
  
2. Send it to your boss and show him what you did in less than an hour ;-)

**Note!** Make sure you don't end up with changes deployed in multiple places:
* **${TOMCAT_HOME}/shared/classes** - from running hotcopy-tomcat-zip
* **${TOMCAT_HOME}/lib** - from running dist-jar and moving them into the lib folder 
* **${TOMCAT_HOME}/shared/lib** - from running dist-jar and moving them into the lib folder 

...because if you have the same changes deployed in both places it will be hard to know which one that acually
is being used (event though the .jar probably will win).