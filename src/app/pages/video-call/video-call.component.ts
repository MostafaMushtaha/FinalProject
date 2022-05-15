import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-call',
  templateUrl: './video-call.component.html',
  styleUrls: ['./video-call.component.scss']
})
export class VideoCallComponent implements OnInit {

  constructor() { }

//   (function (d, m) {
//   var kommunicateSettings =
//     { "appId": "35ba17994e9f52adc8094a1633125bc2c", "popupWidget": true, "automaticChatOpenOnNavigation": true };
//   var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
//   s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
//   var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
//   window.kommunicate = m; m._globals = kommunicateSettings;
// })(document, window.kommunicate || {});

ngOnInit(): void {
}

}
