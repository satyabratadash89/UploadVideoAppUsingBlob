import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hideVideo= true;
  title = 'Video Upload App';
  tmppath= '';
  sanitizedUrl: any;
constructor( public sanitizer: DomSanitizer) {

}
sanitize(path) {
  return this.sanitizer.bypassSecurityTrustUrl(path);
}
  uploadFileToServer(event: any, fileName) {
      this.tmppath = URL.createObjectURL(event.target.files[0]); // Finding the blob path for the file
      this.sanitizedUrl = this.sanitize(this.tmppath);
      let blob = this.tmppath;
  }
}
