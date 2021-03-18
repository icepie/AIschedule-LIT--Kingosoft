/*************************************************************************************
* Author : icepie
* last updated @ 2021/03/19 01:47
* Any question or assistances please contact: mailto:icepie.dev@gmail.com
* this project has been updated to Github:
** https://github.com/icepie/AIschedule-LIT-Kingosoft
***************************************************************************************/
//scheduleHtmlProvider.js:get html data from the website and pass them to parse
function scheduleHtmlProvider(iframeContent = "", frameContent = "", dom = document) {
    let http = new XMLHttpRequest()
    http.open('GET', '/wsxk/stu_zxjg_rpt.aspx', false)
    http.send()
    return http.responseText
}
