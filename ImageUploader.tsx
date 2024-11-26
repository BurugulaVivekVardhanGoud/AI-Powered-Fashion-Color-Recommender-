import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Camera } from 'lucide-react';
import Webcam from 'react-webcam';

interface ImageUploaderProps {
  onImageCapture: (image: string) => void;
}

export default function ImageUploader({ onImageCapture }: ImageUploaderProps) {
  const [showCamera, setShowCamera] = React.useState(false);
  const webcamRef = React.useRef<Webcam>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      onImageCapture(reader.result as string);
    };
    reader.readAsDataURL(file);
  }, [onImageCapture]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1
  });

  const capturePhoto = React.useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      onImageCapture(imageSrc);
      setShowCamera(false);
    }
  }, [onImageCapture]);

  if (showCamera) {
    return (
      <div className="relative w-full max-w-md mx-auto">
        <Webcam
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="rounded-lg w-full"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 space-x-4">
          <button
            onClick={capturePhoto}
            className="btn-primary px-6 py-2 rounded-full bg-white text-black hover:bg-gray-100"
          >
            Capture
          </button>
          <button
            onClick={() => setShowCamera(false)}
            className="btn-secondary px-6 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-purple-500 bg-purple-50/5' : 'border-gray-700 hover:border-purple-500'}`}
      >
        <input {...getInputProps()} />
        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <p className="text-gray-300">
          {isDragActive
            ? 'Drop your photo here...'
            : 'Drag & drop your photo here, or click to select'}
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Supported formats: JPG, PNG
        </p>
      </div>

      <div className="text-center">
        <span className="text-gray-500">or</span>
      </div>

      <button
        onClick={() => setShowCamera(true)}
        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
      >
        <Camera size={20} />
        <span>Take a Photo</span>
      </button>
    </div>
  );
}