import { Component } from '@angular/core';
import { Toast } from '@capacitor/toast';
import { Clipboard } from '@capacitor/clipboard';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  clipboardText = '';

  constructor(private clipboard: Clipboard) {}

  showHelloToast(){
    Toast.show({
      text: 'Hello!',
    });
  };

  writeToClipboard = async () => {
    await Clipboard.write({
      string: this.clipboardText,
    });
  };
  
  checkClipboard = async () => {
    const { type, value } = await Clipboard.read();
  
    console.log(`Got ${type} from clipboard: ${value}`);
  };
  
}
