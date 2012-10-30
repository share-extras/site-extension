<@markup id="css" >
   <#-- CSS Dependencies -->
   <@link rel="stylesheet" type="text/css" href="${url.context}/res/__company__/__usecase__/components/__pageWebscript__.css" group="__company__"  />
</@>

<@markup id="js">
   <#-- JavaScript Dependencies -->
   <@script type="text/javascript" src="${url.context}/res/__company__/__usecase__/components/__pageWebscript__.js" group="__company__"/>
</@>

<@markup id="widgets">
   <@createWidgets group="__company__"/>
</@>

<@markup id="html">
   <@uniqueIdDiv>
      <#assign el = args.htmlid?html>
      <div class="__company__-__usecase__-__pageWebscript__">
         <h3>${msg("header.label")}</h3>
         <div id="${el}-greeting" class="__company__-__usecase__-__pageWebscript__-hidden">
            ${msg("greeting.label")}
         </div>
         <#-- Note! Don't forget to output all user defined input using ?html to avoid xss vectors -->
      </div>
   </@>
</@>