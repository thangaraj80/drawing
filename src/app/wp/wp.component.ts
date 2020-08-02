import { Component, OnInit } from '@angular/core';
// import { CanvasDesigner } from 'assets/canvas-designer-widget.js'

import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-wp',
  templateUrl: './wp.component.html',
  styleUrls: ['./wp.component.css']
})
export class WpComponent implements OnInit {
  widget: SafeResourceUrl
  tools = { 
    "pencil": true,
"text": true,
"image": true,
"pdf": true,
"eraser": true,
"line": true,
"arrow": true,
"dragSingle": true,
"dragMultiple": true,
"arc ": true,
"rectangle ": true,
"quadratic ": true,
"bezier ": true,
"marker ": true,
"zoom ": false,
"lineWidth ": true,
"colorsPicker ": true,
"extraOptions ": true,
"code ": false,
"undo ": true
}
icons = { "line ": null,"arrow ": null,"pencil ": null,"dragSingle ": null,"dragMultiple ": null,"eraser ": null,"rectangle ": null,"arc ": null,"bezier ": null,"quadratic ": null,"text ": null,"image ": null,"pdf ": null,"pdf_next ": null,"pdf_prev ": null,"pdf_close ": null,"marker ": null,"zoom ": null,"lineWidth ": null,"colorsPicker ": null,"extraOptions ": null,"code ": null }
selectedIcon =" pencil"
constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
  
  
//     let designer = new CanvasDesigner();
// designer.widgetHtmlURL = 'assets/canvas-designer.html';
// designer.widgetJsURL = './assets/widget.js';
// //designer.appendTo(document.body || document.documentElement)
// designer.appendTo = function(parentNode, callback) {
//   callback = callback || function() {};
//   parentNode.appendChild(designer.iframe);
// }
// this.widget = this.sanitizer.bypassSecurityTrustResourceUrl(designer.widgetHtmlURL)
// document.getElementById("ad54").appendChild( designer.iframe);
// this.widget = "assets/widget.html?widgetJsURL=assets/widget.js&amp;tools={&quot;pencil&quot;:true,&quot;text&quot;:true,&quot;image&quot;:true,&quot;pdf&quot;:true,&quot;eraser&quot;:true,&quot;line&quot;:true,&quot;arrow&quot;:true,&quot;dragSingle&quot;:true,&quot;dragMultiple&quot;:true,&quot;arc&quot;:true,&quot;rectangle&quot;:true,&quot;quadratic&quot;:false,&quot;bezier&quot;:true,&quot;marker&quot;:true,&quot;zoom&quot;:false,&quot;lineWidth&quot;:false,&quot;colorsPicker&quot;:false,&quot;extraOptions&quot;:false,&quot;code&quot;:false,&quot;undo&quot;:true}&amp;selectedIcon=pencil&amp;icons={&quot;line&quot;:null,&quot;arrow&quot;:null,&quot;pencil&quot;:null,&quot;dragSingle&quot;:null,&quot;dragMultiple&quot;:null,&quot;eraser&quot;:null,&quot;rectangle&quot;:null,&quot;arc&quot;:null,&quot;bezier&quot;:null,&quot;quadratic&quot;:null,&quot;text&quot;:null,&quot;image&quot;:null,&quot;pdf&quot;:null,&quot;pdf_next&quot;:null,&quot;pdf_prev&quot;:null,&quot;pdf_close&quot;:null,&quot;marker&quot;:null,&quot;zoom&quot;:null,&quot;lineWidth&quot;:null,&quot;colorsPicker&quot;:null,&quot;extraOptions&quot;:null,&quot;code&quot;:null}"
  }


}
