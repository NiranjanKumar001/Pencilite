# ✏️ Pencilite

<div align="center">

### AI-Powered Visual Workspace for Diagrams, Architecture Design & Collaborative Thinking

![License](https://img.shields.io/badge/License-MIT-green)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)
![Convex](https://img.shields.io/badge/Convex-Realtime-orange)
![NextAuth.js](https://img.shields.io/badge/Auth-NextAuth.js-purple)

Create diagrams, design systems, map workflows, and transform ideas into structured visual experiences with the power of AI.

</div>

---

## 🚀 Overview

Pencilite is an AI-native visual workspace that helps teams and individuals create diagrams, workflows, system architectures, mind maps, and technical documentation faster than ever.

Whether you're planning a product, designing a distributed system, documenting infrastructure, or brainstorming ideas, Pencilite provides an intuitive canvas combined with intelligent automation to accelerate the process.

---

## ✨ Key Features

### 🤖 AI Diagram Generation

Generate complete diagrams from natural language prompts.

* Convert ideas into visual structures instantly
* Generate architecture diagrams
* Create workflow maps automatically
* Transform text into organized visual layouts
* Expand and refine existing diagrams using AI

### 🎨 Infinite Visual Canvas

Build without limitations.

* Infinite zoomable workspace
* Smooth pan & navigation
* Drag-and-drop editing
* Grid snapping & alignment tools
* Responsive interaction experience

### 🔗 Intelligent Connections

Design complex relationships effortlessly.

* Smart edge routing
* Automatic connector management
* Multiple connection styles
* Clean and organized visual layouts
* Dynamic node relationships

### 📊 Multiple Diagram Types

Support for various visual workflows:

* Flowcharts
* System Architecture Diagrams
* User Journey Maps
* Mind Maps
* Organizational Charts
* Database Schemas
* Process Workflows
* Product Roadmaps
* Technical Documentation Diagrams

### 👥 Real-Time Collaboration

Work together seamlessly.

* Multi-user collaboration
* Live updates
* Shared workspaces
* Team-based projects
* Instant synchronization

### 📝 Rich Content Editing

Enhance diagrams with contextual information.

* Rich text notes
* Markdown support
* Embedded documentation
* Annotations & comments
* Structured content organization

### 📚 Templates & Reusable Components

Start faster with pre-built resources.

* Diagram templates
* Architecture blueprints
* Reusable blocks
* Custom component libraries
* Workspace presets

### 📤 Export & Sharing

Share your work anywhere.

* PNG Export
* SVG Export
* PDF Export
* Shareable Links
* Presentation-ready outputs

---

## 🎯 Use Cases

<table>
<tr>
<td>🏗️ System Architecture</td>
<td>🧠 Brainstorming Sessions</td>
</tr>
<tr>
<td>📈 Business Process Mapping</td>
<td>🛣️ User Journey Design</td>
</tr>
<tr>
<td>🗄️ Database Modeling</td>
<td>📋 Product Planning</td>
</tr>
<tr>
<td>📚 Technical Documentation</td>
<td>⚙️ Workflow Automation</td>
</tr>
</table>

---

## ⚡ Why Pencilite?

Traditional diagramming tools focus on drawing.

Pencilite focuses on **thinking, designing, and communicating ideas faster**.

By combining:

* AI-assisted creation
* Infinite canvas workflows
* Real-time collaboration
* Structured visual organization

Pencilite helps teams spend less time drawing and more time building.

---

## 🏗️ Core Capabilities

| Capability     | Description                         |
| -------------- | ----------------------------------- |
| AI Generation  | Create diagrams from prompts        |
| Visual Editing | Interactive drag-and-drop canvas    |
| Collaboration  | Real-time multi-user editing        |
| Documentation  | Rich notes and contextual content   |
| Organization   | Structured workspaces and projects  |
| Exporting      | PNG, SVG & PDF outputs              |
| Scalability    | Supports large and complex diagrams |

---

## 🧰 Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 14 App Router |
| UI | React 18, TypeScript, Tailwind CSS |
| Components | shadcn/ui style components, Radix UI primitives |
| Auth | NextAuth.js with Google OAuth |
| Database / realtime backend | Convex |
| Whiteboard | Excalidraw |
| Rich text editor | Editor.js with header, list, checklist, paragraph, and warning tools |
| Icons / notifications | lucide-react, Sonner |
| Utilities | Moment.js, clsx, tailwind-merge |

---

## ⚙️ Environment Variables

Create a local `.env.local` file from the committed example:

```bash
cp .env.example .env.local
```

Required values:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_CONVEX_URL` | Convex deployment URL used by the client provider |
| `NEXTAUTH_URL` | Local or deployed app URL used by NextAuth |
| `NEXTAUTH_SECRET` | Secret used to sign NextAuth tokens |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |
| `NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID` | Optional Google AdSense client ID used by the ad script/components |

For Google OAuth, add this callback URL in the Google Cloud Console:

```text
http://localhost:3000/api/auth/callback/google
```

---

## 🚦 Getting Started

Install dependencies:

```bash
npm install
```

Run the Next.js app:

```bash
npm run dev
```

Run Convex in a separate terminal when working on backend functions:

```bash
npx convex dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🌟 Built For

* Software Engineers
* Product Managers
* Founders
* Designers
* Architects
* Consultants
* Technical Writers
* Operations Teams

---

<div align="center">

### Transform Ideas Into Visual Intelligence

**Pencilite** empowers teams to visualize, collaborate, and innovate through AI-powered diagramming and intelligent visual workflows.

</div>
