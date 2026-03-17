
import os
from PIL import Image
import sys

def convert_images(directory):
    if not os.path.exists(directory):
        print(f"Directory not found: {directory}")
        return

    files = [f for f in os.listdir(directory) if f.lower().endswith('.png')]
    print(f"Found {len(files)} PNG files in {directory}")

    for filename in files:
        filepath = os.path.join(directory, filename)
        webp_path = os.path.splitext(filepath)[0] + ".webp"
        
        try:
            with Image.open(filepath) as img:
                img.save(webp_path, "WEBP", quality=80)
                print(f"Converted: {filename} -> {os.path.basename(webp_path)}")
        except Exception as e:
            print(f"Error converting {filename}: {e}")

if __name__ == "__main__":
    target_dir = r"c:\Users\Lenovo\Desktop\My Lovely Baby\assets\blog"
    convert_images(target_dir)
