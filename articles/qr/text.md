## Simple QR code generation

Have you ever wondered how QR codes work? Well me too. I am always impressed by how fast you can scan them. Recently, I had
a bit of spare time and thought of how to write my own qr code scanner. As it turns out, it is not easy with the main hurdle being the standard and different edge cases. Nevertheless, let's write a simple qr code generator, that can generate codes for short strings.

### Setup

Fire up your browser and create a basic 400x400 canvas like the following:

**canvas**

Perfect!

### Markers

Ok, so if you've set up everything, let's get coding:

The most prominent parts on a qr code of the first generation (the one we will create) are the three markers in the top left/right and bottom left corners. Those are used for identifying the correct orientation of the qr code. If there'd only be 2 markers then the orientation would be ambigious and a reader would not be able to decode it properly.

The markers here are 7x7 blocks that look like the following: