                            ***********************************
                                Share Site Extension Project
                            ***********************************

Requirements:

* Alfresco version 4.2.b (or later).


1. INTRODUCTION
===============

This is a project template meant to get you quickly up and running with
site based customizations in Alfresco Share.

By entering your company's name, the name of your usecase and some additional parameters
you will get a fully working and namespaced site customization project with ant tasks
for deploying and packaging your site extension.

It will also provide you with sample code for the most common extension points.



2. USAGE
==========


2.1 Create project
------------------

Start by running the "help" command in your console when standing in this directory.

%> ant help

It will give detailed instructions on which parameters you need to provide when creating the project.
Once done you will be able to see a directory named after your company placed as a sibling to the this directory.


2.2 Configure
-------------

Make sure to enter the path to your Alfresco server(s) in the generated build files so the build tasks can deploy
your customization.


<company>/<usecase>_repo/build.properties
------------------------------------------
tomcat.home=/path/to/tomcat

<company>/<usecase>_share/build.properties
------------------------------------------
tomcat.home=/path/to/tomcat

Note! Make sure to use java paths, in other words use "forward slash" (even on Windows).


2.3 Deploy
----------

From the directory named after your company run the following commands to deploy the customization
code to your Alfresco server(s).

To deploy repo...

%> cd <usecase>-repo
%> ant hotcopy-tomcat-zip
%> cd ..

To deploy share...

%> cd <usecase>-share
%> ant hotcopy-tomcat-zip
%> cd ..

The hotcopy-tomcat-zip is a development build task meant for avoiding server restarts when possible.
It will place all your code will in your server's shared/classes directory (except for client side resources which
will be placed inside your exploded share.war directory, so make sure your server has started and has exploded the .war).

Now restart your server and explore your customization:

1. Create a new site and make sure to choose your usecase name as the "Type" in Share's create site dialog.
   (In other words do NOT choose the usual "Collaboration Site")

2. On your new site dashboard you can see:

   a) A 1 column layout with 1 Dashlet inside.
      # Defined in the <template-instance> element & <components> section in <company>-<usecase>-presets.xml

   b) A custom page displayed in the navigation bar (named after your <page> parameter).
      # Defined in the <sitePages> section in <company>-<usecase>-presets.xml

   c) That the "Document Library" has changed name.
      # Defined in the <pageMetadata> section in your <company>-<usecase>-presets.xml file
      # and by <company>.<usecase>.page.documentlibrary.title key in your <company>-<usecase>.properties.

3. When entering the custom page you will see:

   a) A page that includes the title, navigation & a custom component.
      # Defined in your site-data/pages/<company>-<usecase>-<page>.xml

   b) A greeting component which is a generated webscript.
      # Defined in your site-webscripts/<company>/<usecase>/components/<pageWebscript>.get.* files

4. In the document library you will see

   a) A "Apply <usecase> <aspect>" doclib action (if you have "Write" permission).
      # It will apply the aspect by calling the ootb repo action named "add-features".
      # The aspect is defined in the repo's <company>-<usecase>-model.xml
      # The action is defined in <actions> section in <company>-<usecase>-extension.xml

   b) When the aspect is applied you now have

      - An aspect specific doclib metadata template showing your custom property.
        # Defined in the <metadata-templates> section in <company>-<usecase>-extension.xml

      - An indicator showing that your document has the aspect applied and also the value of your property.
        # Defined in the <indicators> section in <company>-<usecase>-extension.xml

      - A "Set <usecase> <property> to <value2>" action (if you have "Write" permission)
        # It will call a generated custom repo action that will update your custom property on the node.
        # The property is defined in the repo's <company>-<usecase>-model.xml
        # The action is defined in <actions> section in <company>-<usecase>-extension.xml

   c) That your property is added to the sort menu.

   5. On the "Properties" panel (on the document details page) & "Edit properties" pages you will see

      a) That your property can be viewed and edited
         # Defined in the <forms> section in <company>-<usecase>-config.xml


2.3 Distribution
----------------

When your code is ready for distribution just:

1. Use either

   - "dist-jar" and place your jar files in your tomcat's shared/lib directories

   OR

   - "dist-amp" and use the

2. Send it to your boss and show him what you did in less than an hour ;-)

Note!
Make sure you don't end up with changes in both:
* shared/classes - from running hotcopy-tomcat-zip
* shared/lib - from running dist-jar and moving them into the lib folder
