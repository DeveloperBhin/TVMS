import {
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';

import {
  BrowserMultiFormatReader,
  IScannerControls
} from '@zxing/browser';

@Component({
  selector: 'app-scan-tree',
  templateUrl: './scan-tree.component.html',
  styleUrls: ['./scan-tree.component.scss']
})
export class ScanTreeComponent implements OnDestroy {

  @ViewChild('video', { static: false })
  videoElement!: ElementRef<HTMLVideoElement>;

  private codeReader = new BrowserMultiFormatReader();

  private scannerControls?: IScannerControls;

  isScanning = false;

  scannedValue = '';

  scanError = '';

  async startScanner(): Promise<void> {

    this.scanError = '';
    this.scannedValue = '';

    try {

      this.isScanning = true;

      const videoInputDevices =
        await BrowserMultiFormatReader.listVideoInputDevices();

      if (!videoInputDevices.length) {

        this.scanError = 'No camera was found on this device.';
        this.isScanning = false;

        return;
      }

      /*
       * Prefer back camera on mobile devices.
       */
      const backCamera =
        videoInputDevices.find(device =>
          device.label.toLowerCase().includes('back') ||
          device.label.toLowerCase().includes('rear') ||
          device.label.toLowerCase().includes('environment')
        );

      const selectedDeviceId =
        backCamera?.deviceId ??
        videoInputDevices[0].deviceId;

      this.scannerControls =
        await this.codeReader.decodeFromVideoDevice(
          selectedDeviceId,
          this.videoElement.nativeElement,
          (result, error) => {

            if (result) {

              const value = result.getText();

              /*
               * Prevent reading the same code continuously.
               */
              if (this.scannedValue === value) {
                return;
              }

              this.scannedValue = value;

              console.log(
                'Scanned tree code:',
                value
              );

              /*
               * Stop camera after successful scan.
               */
              this.stopScanner();

              /*
               * Put your API call here later.
               */
              this.onTreeScanned(value);
            }

          }
        );

    } catch (error) {

      console.error(
        'Camera scanner error:',
        error
      );

      this.scanError =
        'Unable to access camera. Please allow camera permission.';

      this.isScanning = false;
    }
  }


  stopScanner(): void {

    if (this.scannerControls) {

      this.scannerControls.stop();

      this.scannerControls = undefined;
    }

    this.isScanning = false;
  }


  scanAgain(): void {

    this.scannedValue = '';

    setTimeout(() => {
      this.startScanner();
    }, 100);
  }


  private onTreeScanned(
    treeCode: string
  ): void {

    console.log(
      'Search tree using:',
      treeCode
    );

    /*
     * Later:
     *
     * this.treeService
     *   .getTreeByCode(treeCode)
     *   .subscribe(...)
     */

  }


  ngOnDestroy(): void {

    this.stopScanner();
  }

}