/* ============================================================
   Per-section "Trade-off ও আরও ভালো উপায়" box injector.
   প্রতিটি DSA সেকশনের শেষে (page-nav এর আগে) ইনজেক্ট করে:
   s = শক্তি (কখন সেরা), w = দুর্বলতা (কখন খারাপ), b = আরও ভালো বিকল্প
   ============================================================ */
(function () {
  "use strict";

  const T = {
    complexity: {
      s: "যেকোনো অ্যালগরিদম তুলনার সর্বজনীন ভাষা — ইনপুট বড় হলে আচরণ বোঝায়।",
      w: "ধ্রুবক ও ছোট n উপেক্ষা করে — ছোট ইনপুটে O(n²)ও O(n log n) থেকে দ্রুত হতে পারে; শুধু worst case দেখলে ভুল ধারণা হয়।",
      b: "ছোট/বাস্তব ইনপুটে সত্যিকারের benchmark করো; average ও amortized আলাদা ভাবো; time-এর পাশাপাশি space ও cache-friendliness বিবেচনা করো।"
    },
    recursion: {
      s: "tree/graph, divide-and-conquer, backtracking-এ স্বাভাবিক ও পরিষ্কার কোড।",
      w: "call stack-এ মেমোরি খরচ; গভীর হলে stack overflow; ফাংশন কলের overhead।",
      b: "linear/গভীর recursion → iteration বা explicit stack; overlapping subproblem থাকলে → memoization/DP; tail recursion → loop।"
    },
    searching: {
      s: "Binary search সাজানো ডেটায় O(log n) — অবিশ্বাস্য দ্রুত।",
      w: "Binary search-এর জন্য ডেটা সাজানো থাকা বাধ্যতামূলক (সাজাতে O(n log n))।",
      b: "শুধু 'আছে কিনা' জানতে হলে (ক্রম দরকার নেই) → hash set O(1); ঘন ঘন insert+search+range → balanced BST; ছোট int key → সরাসরি array।"
    },
    sorting: {
      s: "Merge/Quick গড়ে O(n log n) — comparison sort-এর তাত্ত্বিক সীমা।",
      w: "O(n log n) সীমা ভাঙা যায় না comparison দিয়ে; Quick worst O(n²); Bubble/Selection বড় ডেটায় অকেজো।",
      b: "ছোট পরিসরের int → Counting/Radix Sort O(n); বাস্তবে নিজে না লিখে built-in <code>sorted()</code> (Timsort); শুধু k-তম/top-k দরকার হলে পুরো sort নয় → Heap বা QuickSelect।"
    },
    dp: {
      s: "overlapping subproblem + optimal substructure থাকলে exponential → polynomial।",
      w: "state বড় হলে time/space বেশি; সঠিক state ধরা কঠিন; সবসময় দরকার নেই।",
      b: "greedy-choice property থাকলে → Greedy (দ্রুত, কম মেমোরি); 2D DP প্রায়ই 1D-তে space-optimize করা যায়; কখনো সরাসরি গাণিতিক সূত্রই যথেষ্ট।"
    },
    greedy: {
      s: "সঠিক হলে সবচেয়ে দ্রুত ও সরল (সাধারণত sort + এক পাস)।",
      w: "সব সমস্যায় optimal নয় — ভুল হলে নীরবে ভুল উত্তর দেয়।",
      b: "greedy ব্যর্থ হলে (counter-example পেলে) → DP; প্রমাণ ছাড়া greedy-তে ভরসা কোরো না, ছোট ইনপুটে brute-force-এর সাথে মিলিয়ে দেখো।"
    },
    stringmatching: {
      s: "KMP/Rabin-Karp একটি pattern O(n+m)-এ খোঁজে, naive O(n·m) এড়ায়।",
      w: "একবারের সরল খোঁজায় এত জটিলতা অপ্রয়োজনীয়; Rabin-Karp worst case hash collision-এ O(n·m)।",
      b: "একবার সাধারণ খোঁজা → built-in <code>str.find()</code>; বহু pattern একসাথে → Aho-Corasick; বহু query একই text-এ → Suffix Array/Automaton; Z-algorithm KMP-র বিকল্প।"
    },
    mathalgo: {
      s: "সংখ্যার গঠন (ভাজক/বিট/mod) কাজে লাগিয়ে brute-force এড়ায় (Euclid, fast exp O(log n))।",
      w: "নিজে লিখতে গেলে edge case (overflow, নেগেটিভ, mod) ভুল হওয়া সহজ।",
      b: "বাস্তবে built-in ব্যবহার করো — <code>math.gcd</code>, <code>math.lcm</code>, <code>pow(b,e,mod)</code>; একটিমাত্র prime চেক → trial division √n, অনেকগুলো লাগলে → Sieve।"
    },
    twopointer: {
      s: "সাজানো array/linked list-এ O(n²) → O(n), O(1) extra space।",
      w: "সাধারণত ডেটা সাজানো থাকা লাগে; অসাজানো হলে সরাসরি খাটে না।",
      b: "অসাজানো ডেটায় জোড়া খোঁজা → hash map (O(n)); contiguous subarray → sliding window; সাজানো না থাকলে আগে sort করার খরচ (O(n log n)) হিসাব করো।"
    },
    slidingwindow: {
      s: "contiguous subarray/substring সমস্যায় O(n) — প্রতিটি উপাদান একবার ঢোকে-বেরোয়।",
      w: "শুধু পরপর (contiguous) উপাদানে কাজ করে; নেগেটিভ মান থাকলে কিছু window লজিক ভাঙে।",
      b: "অ-contiguous/subset → DP বা backtracking; বারবার range sum + update → prefix sum / Fenwick; নির্দিষ্ট-যোগফল subarray → prefix sum + hashmap।"
    },
    prefixsum: {
      s: "precompute করার পর যেকোনো range query O(1)।",
      w: "ডেটা পরিবর্তন (update) হলে পুরো prefix O(n)-এ রিবিল্ড করতে হয়।",
      b: "update + query দুটোই লাগলে → Fenwick Tree (BIT) বা Segment Tree O(log n); 2D গ্রিডে → 2D prefix sum; min/max range → Sparse Table (static) বা Segment Tree।"
    },
    monotonicstack: {
      s: "next/previous greater-smaller সমস্যায় O(n), brute-force O(n²) এড়ায়।",
      w: "শুধু নির্দিষ্ট ধরনের (monotonic) range সম্পর্কে; জটিল range query-তে অপর্যাপ্ত।",
      b: "ইচ্ছামতো range min/max + update → Segment Tree; sliding window max → monotonic deque; সাধারণ lookup → hash map।"
    },
    backtracking: {
      s: "সব বৈধ সমাধান/বিন্যাস খুঁজে বের করে (permutation, subset, N-Queens)।",
      w: "exponential — বড় ইনপুটে অসম্ভব ধীর।",
      b: "overlapping subproblem থাকলে → memoization/DP (যেমন Word Break); শুধু গুনতে হলে → combinatorics সূত্র; pruning / branch-and-bound দিয়ে search space ছোট করো।"
    },
    bitmanip: {
      s: "O(1)-এ চতুর অপারেশন, কম মেমোরি (একটি int-এ অনেক flag)।",
      w: "কোড পড়া কঠিন, ভুল হওয়া সহজ; int width-এ সীমাবদ্ধ; বড় set-এ অচল।",
      b: "পারফরম্যান্স critical না হলে পরিষ্কার <code>set</code>/boolean array ব্যবহার করো; বড় subset enumeration (n&gt;~20) → bitmask DP-ও ভারী হয়, ভিন্ন approach লাগে।"
    },
    cyclicsort: {
      s: "১..n রেঞ্জের সংখ্যায় missing/duplicate O(n) time, O(1) space।",
      w: "শুধু সীমিত রেঞ্জ (১..n / ০..n-1) এ কাজ করে — অন্য রেঞ্জে নয়।",
      b: "রেঞ্জ ভিন্ন/বড় হলে → hash set; শুধু একটি missing → XOR বা যোগফল সূত্র (O(1) space); ডুপ্লিকেট + লিংকড সাইকেল → Floyd's cycle detection।"
    },
    twoheaps: {
      s: "running median/মাঝ-মান O(log n) add, O(1) query।",
      w: "শুধু মাঝ-সম্পর্কিত প্রশ্নে; ইচ্ছামতো k-তম বা search-এ নয়।",
      b: "অনেক রকম order-statistics লাগলে → balanced BST / order-statistics tree; ডেটা static হলে → একবার sort করে index; শুধু top-k → single heap।"
    },
    matrix: {
      s: "গ্রিড ডেটা সরাসরি (row,col) index-এ — সহজ ও cache-friendly।",
      w: "ভারী সংখ্যাসূচক কাজে বিশুদ্ধ Python লুপ ধীর; বড় sparse গ্রিডে মেমোরি অপচয়।",
      b: "connectivity/path → grid-কে graph ধরে BFS/DFS; ভারী numeric → NumPy (vectorized); sparse হলে → dict/coordinate list; sorted matrix search → binary search/staircase।"
    },
    linkedlist: {
      s: "জানা নোডে insert/delete O(1); আকার আগে জানা লাগে না।",
      w: "index access O(n); pointer-এ বাড়তি মেমোরি; cache-unfriendly (ছড়ানো)।",
      b: "random access বেশি লাগলে → dynamic array (Python list); দুই প্রান্তে অপারেশন → <code>collections.deque</code>; বেশিরভাগ বাস্তব ক্ষেত্রে array-ই দ্রুত (cache)।"
    },
    stackqueue: {
      s: "LIFO/FIFO অপারেশন O(1); সরল ও সর্বত্র ব্যবহৃত।",
      w: "সাধারণ list দিয়ে queue করলে pop(0) O(n); অগ্রাধিকার সামলাতে পারে না।",
      b: "queue/দুই-প্রান্ত → <code>collections.deque</code>; অগ্রাধিকার লাগলে → Heap (priority queue); next-greater টাইপ → monotonic stack।"
    },
    hashing: {
      s: "গড়ে O(1) insert/search/delete — lookup-heavy সমস্যার রাজা।",
      w: "worst case O(n) (collision); ক্রম রাখে না; মেমোরি বেশি; key hashable হতে হবে।",
      b: "ক্রম/range query লাগলে → sorted structure বা balanced BST; key ছোট int হলে → সরাসরি array (দ্রুত, কম মেমোরি); ক্রমে iterate লাগলে → <code>OrderedDict</code>/sorted।"
    },
    heaps: {
      s: "top-k, streaming, priority — চরম মান O(1) peek, O(log n) push/pop।",
      w: "ইচ্ছামতো খোঁজা/সাজানো iterate করা যায় না (শুধু top)।",
      b: "সব সাজানো লাগলে → full sort; শুধু একটি k-তম → QuickSelect O(n) average; ordered insert+search+range → balanced BST।"
    },
    trees: {
      s: "BST (ব্যালেন্সড) search/insert/delete O(log n) + ক্রমে iterate (inorder)।",
      w: "skewed হলে O(n)-এ নেমে যায়; ম্যানুয়াল balance কঠিন।",
      b: "সবসময় O(log n) চাইলে → self-balancing (AVL/Red-Black) বা Python <code>sortedcontainers</code>; ক্রম দরকার না হলে → hash map (O(1)); ডিস্ক/DB index → B-Tree।"
    },
    trie: {
      s: "prefix খোঁজা/autocomplete O(L) — শব্দসংখ্যার উপর নির্ভর করে না।",
      w: "প্রতিটি নোডে children map → অনেক মেমোরি।",
      b: "শুধু পূর্ণ-শব্দ lookup → hash set (কম মেমোরি); মেমোরি বাঁচাতে → compressed trie/radix tree; substring (prefix নয়) → Suffix Tree/Array।"
    },
    graphs: {
      s: "BFS/DFS O(V+E)-এ connectivity, পথ, traversal — সর্বজনীন।",
      w: "BFS unweighted-এ shortest দেয়, weighted-এ নয়; recursion DFS গভীরে stack overflow।",
      b: "শুধু 'যুক্ত কিনা/components' → Union-Find (দ্রুত); weighted shortest → Dijkstra; নির্ভরতা-ক্রম → Topological Sort; heuristic থাকলে → A*।"
    },
    advancedgraph: {
      s: "Dijkstra weighted single-source shortest O(E log V)।",
      w: "Dijkstra নেগেটিভ edge-এ ভুল; all-pairs-এ চালালে ধীর।",
      b: "নেগেটিভ edge → Bellman-Ford; সব-জোড়ার পথ (ছোট graph) → Floyd-Warshall O(V³); গন্তব্যমুখী heuristic → A* (দ্রুততর)।"
    },
    mst: {
      s: "সব নোড ন্যূনতম খরচে যুক্ত — Kruskal/Prim O(E log V)।",
      w: "শুধু undirected connected graph-এ; directed-এ নয় (সেটা Arborescence)।",
      b: "sparse graph → Kruskal (edge sort + Union-Find); dense graph → Prim (heap); সমান্তরাল/বিশাল → Borůvka।"
    },
    unionfind: {
      s: "dynamic connectivity ও 'একই গ্রুপ?' প্রায় O(1) (path compression + rank)।",
      w: "edge মুছা/গ্রুপ ভাঙা সহজে সমর্থন করে না (শুধু union, find)।",
      b: "static graph-এ একবার components বের করতে → সরাসরি DFS/BFS যথেষ্ট; deletion-সহ dynamic connectivity → Euler Tour Tree/Link-Cut Tree (অ্যাডভান্সড)।"
    },
    segmenttree: {
      s: "range query + point/range update দুটোই O(log n); min/max/sum সব নমনীয়।",
      w: "কোড জটিল, মেমোরি ~4n; ছোট/সরল কাজে অতিরিক্ত।",
      b: "update না থাকলে → prefix sum (query O(1), অনেক সরল); শুধু prefix-sum + update → Fenwick (BIT, ছোট কোড); মাঝারি কাজে সরল বিকল্প → Sqrt Decomposition।"
    }
  };

  function build(d) {
    const box = document.createElement("div");
    box.className = "note tradeoff";
    box.innerHTML =
      '<span class="tag">⚖️ Trade-off ও আরও ভালো উপায়</span>' +
      '<ul>' +
      `<li><b>✅ কখন সেরা:</b> ${d.s}</li>` +
      `<li><b>⚠️ দুর্বলতা / কখন খারাপ:</b> ${d.w}</li>` +
      `<li><b>🔁 তখন আরও ভালো:</b> ${d.b}</li>` +
      '</ul>';
    return box;
  }

  for (const id in T) {
    const d = T[id];
    if (!d || !d.s) continue;
    const section = document.getElementById(id);
    if (!section) continue;
    const nav = section.querySelector(".page-nav");
    const box = build(d);
    if (nav) section.insertBefore(box, nav);
    else section.appendChild(box);
  }
})();
