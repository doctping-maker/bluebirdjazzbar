import urllib.request
import urllib.parse
import os

images = {
    "bluebird_cover.jpg": "https://thestandard.co/wp-content/uploads/2020/02/POP-Restaurant-_-Bar_ไปทองหล่อฟังแจ๊สในห้องนั่งเล่นบ้านเพื่อน-ที่-Bluebird-Jazz-Bar_COVER.jpg",
    "bluebird_1.jpg": "https://thestandard.co/wp-content/uploads/2020/02/POP-Restaurant-_-Bar_ไปทองหล่อฟังแจ๊สในห้องนั่งเล่นบ้านเพื่อน-ที่-Bluebird-Jazz-Bar_1.jpg",
    "bluebird_2.jpg": "https://thestandard.co/wp-content/uploads/2020/02/POP-Restaurant-_-Bar_ไปทองหล่อฟังแจ๊สในห้องนั่งเล่นบ้านเพื่อน-ที่-Bluebird-Jazz-Bar_2.jpg",
    "bluebird_3.jpg": "https://thestandard.co/wp-content/uploads/2020/02/POP-Restaurant-_-Bar_ไปทองหล่อฟังแจ๊สในห้องนั่งเล่นบ้านเพื่อน-ที่-Bluebird-Jazz-Bar_3.jpg",
    "bluebird_4.jpg": "https://thestandard.co/wp-content/uploads/2020/02/POP-Restaurant-_-Bar_ไปทองหล่อฟังแจ๊สในห้องนั่งเล่นบ้านเพื่อน-ที่-Bluebird-Jazz-Bar_4.jpg",
    "bluebird_5.jpg": "https://thestandard.co/wp-content/uploads/2020/02/POP-Restaurant-_-Bar_ไปทองหล่อฟังแจ๊สในห้องนั่งเล่นบ้านเพื่อน-ที่-Bluebird-Jazz-Bar_5.jpg",
    "bluebird_6.jpg": "https://thestandard.co/wp-content/uploads/2020/02/POP-Restaurant-_-Bar_ไปทองหล่อฟังแจ๊สในห้องนั่งเล่นบ้านเพื่อน-ที่-Bluebird-Jazz-Bar_6.jpg",
    "bluebird_7.jpg": "https://thestandard.co/wp-content/uploads/2020/02/POP-Restaurant-_-Bar_ไปทองหล่อฟังแจ๊สในห้องนั่งเล่นบ้านเพื่อน-ที่-Bluebird-Jazz-Bar_7.jpg",
    "bluebird_8.jpg": "https://thestandard.co/wp-content/uploads/2020/02/POP-Restaurant-_-Bar_ไปทองหล่อฟังแจ๊สในห้องนั่งเล่นบ้านเพื่อน-ที่-Bluebird-Jazz-Bar_8.jpg",
    "bluebird_9.jpg": "https://thestandard.co/wp-content/uploads/2020/02/POP-Restaurant-_-Bar_ไปทองหล่อฟังแจ๊สในห้องนั่งเล่นบ้านเพื่อน-ที่-Bluebird-Jazz-Bar_9.jpg",
    "bluebird_10.jpg": "https://thestandard.co/wp-content/uploads/2020/02/POP-Restaurant-_-Bar_ไปทองหล่อฟังแจ๊สในห้องนั่งเล่นบ้านเพื่อน-ที่-Bluebird-Jazz-Bar_10.jpg"
}

dest_dir = "/Users/ping/.gemini/antigravity/scratch/bluebird-jazz-bar/public"
os.makedirs(dest_dir, exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

for name, url in images.items():
    dest_path = os.path.join(dest_dir, name)
    print(f"Downloading {url} to {dest_path}...")
    try:
        encoded_url = urllib.parse.quote(url, safe=':/?=')
        req = urllib.request.Request(encoded_url, headers=headers)
        with urllib.request.urlopen(req) as response:
            with open(dest_path, 'wb') as f:
                f.write(response.read())
        print(f"Successfully downloaded {name}")
    except Exception as e:
        print(f"Failed to download {name}: {e}")

# Create symlinks or copy for compatibility with existing code
import shutil
shutil.copyfile(os.path.join(dest_dir, "bluebird_3.jpg"), os.path.join(dest_dir, "bluebird_hero.jpg"))
shutil.copyfile(os.path.join(dest_dir, "bluebird_2.jpg"), os.path.join(dest_dir, "bluebird_interior.jpg"))
shutil.copyfile(os.path.join(dest_dir, "bluebird_9.jpg"), os.path.join(dest_dir, "bluebird_cocktail.jpg"))
print("Copied files for backwards compatibility.")
