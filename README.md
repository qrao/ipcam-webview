# IPCam Webview

This is a single webpage that shows all the IP cameras that I have setup around my home and business.

I have a few different IP cameras. Some are made from Raspberry Pi Zeros. And some are old Android phones
installed with IP WebCam app. I wanted a single webpage that will allow me to look at all the videos, as well
as controlling them.

## Getting Started

Download the repo, and edit the camera.js file, and put in your own setup at the top, in the cameras section.
For each object in the cameras array, video field specifies where the video URL is, and control field specifies
where the control URL is.

Then just open the camera.html in your browser. Ensure camera.js is in the same directory.

### Prerequisites

NONE

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Raspberry Pi Fundation (RaspberryPi.org)
* IP Webcam by Pavel Khlebovich
