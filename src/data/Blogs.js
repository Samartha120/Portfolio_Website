export const blogs = [
  {
    id: 1,
    title: 'The Future of State Management in React 19',
    excerpt: 'Exploring compiler-driven UI patterns and the demise of excessive dependency arrays in modern React architectures.',
    date: '2026-10-24',
    readTime: '6 min read',
    category: 'Engineering',
    content: [
      'React 19 makes it easier to write UI that stays correct as it grows. The big win isn’t a single new API — it’s the combination of better defaults, improved tooling, and patterns that reduce accidental complexity.',
      'In practice, state management becomes a question of scope. Local state for truly local concerns, URL state for shareable UI, and server state handled with predictable caching and invalidation strategies.',
      'The most useful habit is to model state around user intent. If the UI can be refreshed or revisited and still makes sense, you’re probably storing the right state in the right place.',
    ],
  },
  {
    id: 2,
    title: 'Designing with Purpose: Ethics in AI UIs',
    excerpt: 'How we can design transparent algorithms that keep users informed about confidence scores and machine biases.',
    date: '2026-09-12',
    readTime: '8 min read',
    category: 'UX Design',
    content: [
      'AI features are product features — and users deserve clarity. Good AI UI communicates uncertainty, shows what data influenced a result, and provides meaningful ways to correct mistakes.',
      'A practical approach is to surface a lightweight explanation first, then allow the user to drill down. Most people don’t want a whitepaper — they want the “why” in one sentence.',
      'Ethical design shows up in defaults: safe actions, reversible steps, and copy that avoids overstating model capability.',
    ],
  },
  {
    id: 3,
    title: 'Optimizing Framer Motion for Enterprise',
    excerpt: 'Techniques for ensuring buttery 60fps animations in deeply nested component trees without thrashing layout engines.',
    date: '2026-08-05',
    readTime: '5 min read',
    category: 'Performance',
    content: [
      'Motion is most effective when it reinforces structure: revealing hierarchy, confirming actions, and guiding attention. Too much animation becomes noise — especially in dense, data-heavy UIs.',
      'Keep interactions cheap: prefer opacity and transform, avoid layout thrash, and keep spring configs consistent across the product.',
      'In component libraries, the biggest win is centralizing motion presets so teams can apply animation without creating a new “feel” on every screen.',
    ],
  }
];
