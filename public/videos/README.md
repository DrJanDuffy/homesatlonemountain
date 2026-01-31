# Video Content

Video assets for Homes at Lone Mountain.

## Recommended Hosting

For best performance, host videos on:
- **YouTube** - Best for SEO, embeddable
- **Vimeo** - Professional quality, cleaner embeds
- **Wistia** - Marketing-focused, analytics

## Suggested Videos

### Property Tours
- Virtual tours of featured listings
- Neighborhood drone footage
- Community amenities showcase

### Agent Introduction
- Dr. Jan Duffy introduction video
- "Why Choose Lone Mountain" overview
- Client testimonial compilation

### Educational Content
- "Home Buying Process" explainer
- "Selling Your Home" tips
- "Lone Mountain Market Update" (monthly/quarterly)

## Embedding Videos

### YouTube Embed
```jsx
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="Video Title"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

### Next.js Video Component
For local videos, use the HTML5 video element:
```jsx
<video
  controls
  poster="/videos/thumbnail.jpg"
  className="w-full rounded-lg"
>
  <source src="/videos/tour.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

## Video Specifications

- **Format**: MP4 (H.264)
- **Resolution**: 1080p minimum, 4K preferred for property tours
- **Aspect Ratio**: 16:9
- **Max File Size**: 100MB for local hosting (use external for larger)
