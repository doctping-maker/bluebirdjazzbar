import os
from PIL import Image

def make_background_transparent(image_path, output_path):
    print(f"Processing {image_path}...")
    img = Image.open(image_path)
    img = img.convert("RGBA")
    
    datas = img.getdata()
    newData = []
    
    # We want to make white/near-white pixels transparent.
    # Since it's a JPEG, the white background might have compression artifacts.
    # We use a threshold of 240 for R, G, B to capture all near-white pixels.
    threshold = 240
    for item in datas:
        # Check if R, G, B are all above threshold
        if item[0] >= threshold and item[1] >= threshold and item[2] >= threshold:
            # Make it fully transparent (0 alpha)
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved transparent PNG to {output_path}")

if __name__ == "__main__":
    src = "/Users/ping/.gemini/antigravity/scratch/bluebird-jazz-bar/public/character_color.jpg"
    dest = "/Users/ping/.gemini/antigravity/scratch/bluebird-jazz-bar/public/logo_transparent.png"
    make_background_transparent(src, dest)
