# Final Project: Heartbeat-Responsive Space Visual

**Team Members:**  
- ARIEL WILLY SARAGI S — U2430024F  
- XU Mengyi — U2422442K  

---

## Project Overview

For our final project, our team wanted to create a **relaxation-based alternative visual**, something that reacts to a person’s heartbeat but doesn’t add pressure or stress.  

We intentionally chose an **outer-space theme** because space evokes a sense of nothingness — but in a comforting way. There’s no noise, no demands, no responsibilities. Just a huge, quiet universe where you don’t have to worry about anything. That sense of openness and emptiness becomes the emotional foundation of the whole visual.

---

## Implementation

To translate that feeling into code, we built a **3D interactive environment using p5.js with WEBGL**. The core logic combines several systems working together:

### 1. Heartbeat-Responsive Rhythm
- The BPM sensor drives the internal “pulse.”
- Higher BPM increases distortion, ring expansion, and particle energy.
- Lower BPM slows down everything, allowing the scene to breathe and soften.
- All visual elements are synced to the user’s heart.

### 2. Floating Heart Network
- The heart shape is created using hundreds of 3D nodes connected with lines.
- Each node jitters slightly, giving a living, breathing quality.
- The heart expands and contracts based on the BPM.

### 3. Breathing Particle Rings
- Surrounding the heart, a ring of particles rotates like a galaxy.
- Colors shift from calm blues to warmer reds depending on stress level.
- Movement is smoother during calm states and more chaotic with elevated heart rate.

### 4. Saturn-Like Ring System
- Layered rotating rings provide a cosmic, meditative feeling.
- Rings pulse gently, tied algorithmically to the heartbeat and breathing cycle.

### 5. Starfield Background
- Thousands of stars move slowly in 3D space.
- Stars flicker softly, affected by noise + sine waves, creating a tranquil atmosphere.

### 6. Click-Activated Particle Bursts
- On user click, soft white particles burst outward like tiny stars.
- Provides a small interactive moment without breaking calmness.

---

## Experience

The entire visual is designed so that nothing feels sharp or stressful.  
Everything flows, rotates, pulses, and reacts gently. The user’s heartbeat becomes the center of the universe, and the universe responds with calmness.  

The goal is to provide a **space where you can breathe, relax, and just exist**.

---

## Technologies Used
- **p5.js** (with WEBGL)  
- JavaScript, HTML, CSS  