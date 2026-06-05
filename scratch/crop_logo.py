from PIL import Image

def crop_transparent_padding(image_path, output_path):
    print(f"Opening {image_path}...")
    img = Image.open(image_path)
    
    # Get the bounding box of non-transparent pixels
    bbox = img.getbbox()
    if bbox:
        print(f"Bounding box found: {bbox}")
        # Crop the image to the bounding box
        cropped_img = img.crop(bbox)
        
        # Add a tiny 10px padding so the logo strokes don't touch the very edges of the image file
        width, height = cropped_img.size
        padded_img = Image.new("RGBA", (width + 20, height + 20), (255, 255, 255, 0))
        padded_img.paste(cropped_img, (10, 10))
        
        padded_img.save(output_path, "PNG")
        print(f"Successfully saved tightly cropped logo to {output_path} with size {padded_img.size}")
    else:
        print("Error: No bounding box found (image might be completely transparent).")

if __name__ == "__main__":
    logo_path = "/Users/ping/.gemini/antigravity/scratch/bluebird-jazz-bar/public/logo_transparent.png"
    crop_transparent_padding(logo_path, logo_path)
