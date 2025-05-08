$imageUrls = @{
    "kitchen-clean.jpg" = "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop";
    "bathroom-clean.jpg" = "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop";
    "bedroom-clean.jpg" = "https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&w=1200&auto=format&fit=crop";
    "living-clean.jpg" = "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1200&auto=format&fit=crop";
    "cleaning-hero.jpg" = "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop";
    "blueprint-bg.jpg" = "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200&auto=format&fit=crop";
    "cleaning-pattern.jpg" = "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=1200&auto=format&fit=crop";
    "clean-kitchen.jpg" = "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=1200&auto=format&fit=crop";
    "room-placeholder.jpg" = "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop";
}

# Create destination directory if it doesn't exist
if (-not (Test-Path -Path "public\images")) {
    New-Item -ItemType Directory -Path "public\images" -Force
}

# Download each image
foreach ($key in $imageUrls.Keys) {
    $url = $imageUrls[$key]
    $destination = "public\images\$key"
    
    Write-Host "Downloading $key from $url to $destination"
    try {
        Invoke-WebRequest -Uri $url -OutFile $destination
        Write-Host "Downloaded $key successfully" -ForegroundColor Green
    }
    catch {
        Write-Host "Failed to download $key. Error: $_" -ForegroundColor Red
    }
}

Write-Host "Image download completed!" -ForegroundColor Cyan 