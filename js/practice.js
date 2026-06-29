/* ============================================================
   Per-section practice — প্রতিটি টপিকের নিচে সমজাতীয়
   LeetCode সমস্যা (lc) বা অনুশীলন টাস্ক (ex) ইনজেক্ট করে।
   lc: { n: প্রদর্শন নাম, u: leetcode slug, d: easy|medium|hard }
   ============================================================ */

(function () {
  "use strict";

  const LC = (n, u, d) => ({ n, u, d });

  const PRACTICE = {
    /* ---------- Python বেসিক ---------- */
    intro: { ex: [
      'একটি প্রোগ্রাম লিখুন যা তোমার নাম ও বয়স ছাপায়।',
      '"Hello, World!" ১০ বার ছাপান (লুপ ছাড়া ভাবুন, পরে লুপ দিয়ে)।'
    ]},
    variables: { ex: [
      'দুটি সংখ্যা ইনপুট নিয়ে যোগফল, গুণফল ছাপান।',
      'একটি তাপমাত্রা সেলসিয়াস থেকে ফারেনহাইটে রূপান্তর করুন: F = C*9/5 + 32।',
      'ইনপুট নেওয়া string-কে int-এ রূপান্তর করে ১ যোগ করে দেখান।'
    ]},
    operators: { ex: [
      'একটি সংখ্যা জোড় না বিজোড় বের করুন (% ব্যবহার করে)।',
      'তিনটি সংখ্যার মধ্যে বড়টি বের করুন (and/or ছাড়া, তুলনা দিয়ে)।',
      'দুটি সংখ্যার ভাগফল ও ভাগশেষ একসাথে ছাপান।'
    ]},
    strings: { lc: [
      LC('344. Reverse String', 'reverse-string', 'easy'),
      LC('242. Valid Anagram', 'valid-anagram', 'easy'),
      LC('125. Valid Palindrome', 'valid-palindrome', 'easy'),
      LC('14. Longest Common Prefix', 'longest-common-prefix', 'easy'),
      LC('387. First Unique Character', 'first-unique-character-in-a-string', 'easy'),
      LC('13. Roman to Integer', 'roman-to-integer', 'easy'),
      LC('58. Length of Last Word', 'length-of-last-word', 'easy'),
      LC('28. Find the Index of First Occurrence', 'find-the-index-of-the-first-occurrence-in-a-string', 'easy'),
      LC('8. String to Integer (atoi)', 'string-to-integer-atoi', 'medium')
    ]},
    controlflow: { lc: [
      LC('412. Fizz Buzz', 'fizz-buzz', 'easy'),
      LC('1. Two Sum', 'two-sum', 'easy'),
      LC('9. Palindrome Number', 'palindrome-number', 'easy'),
      LC('66. Plus One', 'plus-one', 'easy')
    ], ex: [
      '১ থেকে ১০০ পর্যন্ত যোগফল বের করুন।',
      'একটি সংখ্যা মৌলিক (prime) কিনা চেক করুন।'
    ]},
    functions: { lc: [
      LC('231. Power of Two', 'power-of-two', 'easy'),
      LC('70. Climbing Stairs', 'climbing-stairs', 'easy'),
      LC('509. Fibonacci Number', 'fibonacci-number', 'easy')
    ], ex: [
      'factorial(n) ফাংশন লিখুন।',
      'একটি list-এর গড় (average) ফেরত দেয় এমন ফাংশন লিখুন।'
    ]},
    datastructures: { lc: [
      LC('1. Two Sum', 'two-sum', 'easy'),
      LC('217. Contains Duplicate', 'contains-duplicate', 'easy'),
      LC('49. Group Anagrams', 'group-anagrams', 'medium'),
      LC('347. Top K Frequent Elements', 'top-k-frequent-elements', 'medium'),
      LC('238. Product of Array Except Self', 'product-of-array-except-self', 'medium'),
      LC('128. Longest Consecutive Sequence', 'longest-consecutive-sequence', 'medium'),
      LC('26. Remove Duplicates from Sorted Array', 'remove-duplicates-from-sorted-array', 'easy'),
      LC('169. Majority Element', 'majority-element', 'easy'),
      LC('88. Merge Sorted Array', 'merge-sorted-array', 'easy'),
      LC('1. Two Sum (আবার অনুশীলন)', 'two-sum', 'easy')
    ]},
    oop: { lc: [
      LC('155. Min Stack', 'min-stack', 'medium'),
      LC('146. LRU Cache', 'lru-cache', 'medium'),
      LC('706. Design HashMap', 'design-hashmap', 'easy'),
      LC('232. Implement Queue using Stacks', 'implement-queue-using-stacks', 'easy')
    ]},
    errors: { ex: [
      'একটি ফাংশন লিখুন যা ভাগ করে, কিন্তু শূন্য দিয়ে ভাগ try/except দিয়ে সামলায়।',
      'ফাইল পড়ার সময় ফাইল না পেলে (FileNotFoundError) বার্তা দেখান।'
    ]},

    /* ---------- Python অ্যাডভান্সড ---------- */
    comprehensions: { lc: [
      LC('118. Pascal’s Triangle', 'pascals-triangle', 'easy'),
      LC('1672. Richest Customer Wealth', 'richest-customer-wealth', 'easy'),
      LC('2942. Find Words Containing Character', 'find-words-containing-character', 'easy')
    ], ex: [
      'list comprehension দিয়ে ১–২০ এর সব জোড় সংখ্যার বর্গ বানান।',
      'একটি generator লিখুন যা অসীম even সংখ্যা দেয় (next() দিয়ে ৫টি নিন)।'
    ]},
    decorators: { ex: [
      'একটি @timer decorator লিখুন যা ফাংশনের রান-টাইম ছাপায়।',
      '@lru_cache দিয়ে recursive fibonacci-কে দ্রুত করুন এবং fib(100) বের করুন।',
      'একটি @repeat(3) decorator লিখুন যা ফাংশনকে ৩ বার চালায়।'
    ]},
    dunder: { lc: [
      LC('155. Min Stack', 'min-stack', 'medium'),
      LC('1206. Design Skiplist', 'design-skiplist', 'hard')
    ], ex: [
      'একটি Fraction ক্লাস লিখুন যেখানে __add__ ও __str__ কাজ করে।',
      'একটি Money ক্লাস বানান যেখানে __eq__ ও __lt__ দিয়ে sorted() কাজ করে।'
    ]},
    internals: { ex: [
      'mutable default argument bug-টি পুনরায় তৈরি করুন, তারপর ঠিক করুন।',
      'shallow vs deep copy-র পার্থক্য একটি nested list দিয়ে প্রমাণ করুন।',
      '`a is b` বনাম `a == b` এর পার্থক্য ছোট ও বড় int দিয়ে দেখান।'
    ]},
    pythonic: { lc: [
      LC('347. Top K Frequent Elements', 'top-k-frequent-elements', 'medium'),
      LC('692. Top K Frequent Words', 'top-k-frequent-words', 'medium'),
      LC('1. Two Sum', 'two-sum', 'easy')
    ], ex: [
      'Counter দিয়ে একটি string-এর সবচেয়ে ঘন অক্ষর বের করুন।',
      'zip() দিয়ে দুটি list একসাথে লুপ করে dict বানান।'
    ]},

    /* ---------- DSA ভিত্তি ও অ্যালগরিদম ---------- */
    complexity: { lc: [
      LC('704. Binary Search (O(log n) অনুভব করুন)', 'binary-search', 'easy'),
      LC('53. Maximum Subarray (O(n))', 'maximum-subarray', 'medium'),
      LC('1. Two Sum (O(n) vs O(n²))', 'two-sum', 'easy')
    ]},
    recursion: { lc: [
      LC('509. Fibonacci Number', 'fibonacci-number', 'easy'),
      LC('50. Pow(x, n)', 'powx-n', 'medium'),
      LC('21. Merge Two Sorted Lists', 'merge-two-sorted-lists', 'easy'),
      LC('779. K-th Symbol in Grammar', 'k-th-symbol-in-grammar', 'medium'),
      LC('241. Different Ways to Add Parentheses', 'different-ways-to-add-parentheses', 'medium')
    ]},
    searching: { lc: [
      LC('704. Binary Search', 'binary-search', 'easy'),
      LC('35. Search Insert Position', 'search-insert-position', 'easy'),
      LC('33. Search in Rotated Sorted Array', 'search-in-rotated-sorted-array', 'medium'),
      LC('34. Find First and Last Position', 'find-first-and-last-position-of-element-in-sorted-array', 'medium'),
      LC('153. Find Minimum in Rotated Sorted Array', 'find-minimum-in-rotated-sorted-array', 'medium'),
      LC('374. Guess Number Higher or Lower', 'guess-number-higher-or-lower', 'easy'),
      LC('278. First Bad Version', 'first-bad-version', 'easy'),
      LC('69. Sqrt(x)', 'sqrtx', 'easy'),
      LC('875. Koko Eating Bananas', 'koko-eating-bananas', 'medium')
    ]},
    sorting: { lc: [
      LC('912. Sort an Array', 'sort-an-array', 'medium'),
      LC('75. Sort Colors', 'sort-colors', 'medium'),
      LC('56. Merge Intervals', 'merge-intervals', 'medium'),
      LC('215. Kth Largest Element', 'kth-largest-element-in-an-array', 'medium'),
      LC('179. Largest Number', 'largest-number', 'medium')
    ]},
    dp: { lc: [
      LC('70. Climbing Stairs', 'climbing-stairs', 'easy'),
      LC('198. House Robber', 'house-robber', 'medium'),
      LC('322. Coin Change', 'coin-change', 'medium'),
      LC('300. Longest Increasing Subsequence', 'longest-increasing-subsequence', 'medium'),
      LC('1143. Longest Common Subsequence', 'longest-common-subsequence', 'medium'),
      LC('72. Edit Distance', 'edit-distance', 'medium'),
      LC('416. Partition Equal Subset Sum', 'partition-equal-subset-sum', 'medium'),
      LC('746. Min Cost Climbing Stairs', 'min-cost-climbing-stairs', 'easy'),
      LC('392. Is Subsequence', 'is-subsequence', 'easy'),
      LC('121. Best Time to Buy and Sell Stock', 'best-time-to-buy-and-sell-stock', 'easy'),
      LC('53. Maximum Subarray (Kadane)', 'maximum-subarray', 'medium')
    ]},
    greedy: { lc: [
      LC('55. Jump Game', 'jump-game', 'medium'),
      LC('45. Jump Game II', 'jump-game-ii', 'medium'),
      LC('122. Best Time to Buy and Sell Stock II', 'best-time-to-buy-and-sell-stock-ii', 'medium'),
      LC('134. Gas Station', 'gas-station', 'medium'),
      LC('435. Non-overlapping Intervals', 'non-overlapping-intervals', 'medium')
    ]},

    /* ---------- FAANG প্যাটার্ন ---------- */
    twopointer: { lc: [
      LC('167. Two Sum II (sorted)', 'two-sum-ii-input-array-is-sorted', 'medium'),
      LC('15. 3Sum', '3sum', 'medium'),
      LC('11. Container With Most Water', 'container-with-most-water', 'medium'),
      LC('26. Remove Duplicates from Sorted Array', 'remove-duplicates-from-sorted-array', 'easy'),
      LC('283. Move Zeroes', 'move-zeroes', 'easy'),
      LC('977. Squares of a Sorted Array', 'squares-of-a-sorted-array', 'easy'),
      LC('344. Reverse String', 'reverse-string', 'easy'),
      LC('42. Trapping Rain Water', 'trapping-rain-water', 'hard')
    ]},
    slidingwindow: { lc: [
      LC('121. Best Time to Buy and Sell Stock', 'best-time-to-buy-and-sell-stock', 'easy'),
      LC('3. Longest Substring Without Repeating', 'longest-substring-without-repeating-characters', 'medium'),
      LC('424. Longest Repeating Character Replacement', 'longest-repeating-character-replacement', 'medium'),
      LC('567. Permutation in String', 'permutation-in-string', 'medium'),
      LC('643. Maximum Average Subarray I', 'maximum-average-subarray-i', 'easy'),
      LC('1456. Max Vowels in a Substring', 'maximum-number-of-vowels-in-a-substring-of-given-length', 'medium'),
      LC('76. Minimum Window Substring', 'minimum-window-substring', 'hard')
    ]},
    backtracking: { lc: [
      LC('78. Subsets', 'subsets', 'medium'),
      LC('46. Permutations', 'permutations', 'medium'),
      LC('39. Combination Sum', 'combination-sum', 'medium'),
      LC('17. Letter Combinations of a Phone Number', 'letter-combinations-of-a-phone-number', 'medium'),
      LC('79. Word Search', 'word-search', 'medium'),
      LC('22. Generate Parentheses', 'generate-parentheses', 'medium'),
      LC('77. Combinations', 'combinations', 'medium'),
      LC('90. Subsets II', 'subsets-ii', 'medium'),
      LC('51. N-Queens', 'n-queens', 'hard')
    ]},
    bitmanip: { lc: [
      LC('136. Single Number', 'single-number', 'easy'),
      LC('191. Number of 1 Bits', 'number-of-1-bits', 'easy'),
      LC('338. Counting Bits', 'counting-bits', 'easy'),
      LC('268. Missing Number', 'missing-number', 'easy'),
      LC('190. Reverse Bits', 'reverse-bits', 'easy'),
      LC('371. Sum of Two Integers', 'sum-of-two-integers', 'medium')
    ]},

    /* ---------- ডেটা স্ট্রাকচার ---------- */
    linkedlist: { lc: [
      LC('206. Reverse Linked List', 'reverse-linked-list', 'easy'),
      LC('141. Linked List Cycle', 'linked-list-cycle', 'easy'),
      LC('21. Merge Two Sorted Lists', 'merge-two-sorted-lists', 'easy'),
      LC('19. Remove Nth Node From End', 'remove-nth-node-from-end-of-list', 'medium'),
      LC('2. Add Two Numbers', 'add-two-numbers', 'medium'),
      LC('203. Remove Linked List Elements', 'remove-linked-list-elements', 'easy'),
      LC('83. Remove Duplicates from Sorted List', 'remove-duplicates-from-sorted-list', 'easy'),
      LC('160. Intersection of Two Linked Lists', 'intersection-of-two-linked-lists', 'easy'),
      LC('234. Palindrome Linked List', 'palindrome-linked-list', 'easy'),
      LC('143. Reorder List', 'reorder-list', 'medium')
    ]},
    stackqueue: { lc: [
      LC('20. Valid Parentheses', 'valid-parentheses', 'easy'),
      LC('155. Min Stack', 'min-stack', 'medium'),
      LC('150. Evaluate Reverse Polish Notation', 'evaluate-reverse-polish-notation', 'medium'),
      LC('739. Daily Temperatures', 'daily-temperatures', 'medium'),
      LC('232. Implement Queue using Stacks', 'implement-queue-using-stacks', 'easy'),
      LC('1047. Remove All Adjacent Duplicates', 'remove-all-adjacent-duplicates-in-string', 'easy'),
      LC('682. Baseball Game', 'baseball-game', 'easy'),
      LC('496. Next Greater Element I', 'next-greater-element-i', 'easy'),
      LC('84. Largest Rectangle in Histogram', 'largest-rectangle-in-histogram', 'hard')
    ]},
    hashing: { lc: [
      LC('1. Two Sum', 'two-sum', 'easy'),
      LC('242. Valid Anagram', 'valid-anagram', 'easy'),
      LC('49. Group Anagrams', 'group-anagrams', 'medium'),
      LC('347. Top K Frequent Elements', 'top-k-frequent-elements', 'medium'),
      LC('128. Longest Consecutive Sequence', 'longest-consecutive-sequence', 'medium'),
      LC('383. Ransom Note', 'ransom-note', 'easy'),
      LC('205. Isomorphic Strings', 'isomorphic-strings', 'easy'),
      LC('219. Contains Duplicate II', 'contains-duplicate-ii', 'easy'),
      LC('560. Subarray Sum Equals K', 'subarray-sum-equals-k', 'medium')
    ]},
    heaps: { lc: [
      LC('215. Kth Largest Element', 'kth-largest-element-in-an-array', 'medium'),
      LC('347. Top K Frequent Elements', 'top-k-frequent-elements', 'medium'),
      LC('973. K Closest Points to Origin', 'k-closest-points-to-origin', 'medium'),
      LC('621. Task Scheduler', 'task-scheduler', 'medium'),
      LC('23. Merge k Sorted Lists', 'merge-k-sorted-lists', 'hard'),
      LC('1046. Last Stone Weight', 'last-stone-weight', 'easy'),
      LC('703. Kth Largest Element in a Stream', 'kth-largest-element-in-a-stream', 'easy'),
      LC('295. Find Median from Data Stream', 'find-median-from-data-stream', 'hard')
    ]},
    trees: { lc: [
      LC('104. Maximum Depth of Binary Tree', 'maximum-depth-of-binary-tree', 'easy'),
      LC('226. Invert Binary Tree', 'invert-binary-tree', 'easy'),
      LC('543. Diameter of Binary Tree', 'diameter-of-binary-tree', 'easy'),
      LC('102. Binary Tree Level Order Traversal', 'binary-tree-level-order-traversal', 'medium'),
      LC('98. Validate Binary Search Tree', 'validate-binary-search-tree', 'medium'),
      LC('236. Lowest Common Ancestor', 'lowest-common-ancestor-of-a-binary-tree', 'medium'),
      LC('100. Same Tree', 'same-tree', 'easy'),
      LC('101. Symmetric Tree', 'symmetric-tree', 'easy'),
      LC('112. Path Sum', 'path-sum', 'easy'),
      LC('700. Search in a BST', 'search-in-a-binary-search-tree', 'easy'),
      LC('617. Merge Two Binary Trees', 'merge-two-binary-trees', 'easy')
    ]},
    trie: { lc: [
      LC('208. Implement Trie (Prefix Tree)', 'implement-trie-prefix-tree', 'medium'),
      LC('211. Design Add and Search Words', 'design-add-and-search-words-data-structure', 'medium'),
      LC('212. Word Search II', 'word-search-ii', 'hard'),
      LC('720. Longest Word in Dictionary', 'longest-word-in-dictionary', 'medium')
    ]},
    graphs: { lc: [
      LC('200. Number of Islands', 'number-of-islands', 'medium'),
      LC('133. Clone Graph', 'clone-graph', 'medium'),
      LC('207. Course Schedule', 'course-schedule', 'medium'),
      LC('994. Rotting Oranges', 'rotting-oranges', 'medium'),
      LC('417. Pacific Atlantic Water Flow', 'pacific-atlantic-water-flow', 'medium'),
      LC('733. Flood Fill', 'flood-fill', 'easy'),
      LC('463. Island Perimeter', 'island-perimeter', 'easy'),
      LC('1971. Find if Path Exists in Graph', 'find-if-path-exists-in-graph', 'easy'),
      LC('127. Word Ladder', 'word-ladder', 'hard')
    ]},
    advancedgraph: { lc: [
      LC('743. Network Delay Time (Dijkstra)', 'network-delay-time', 'medium'),
      LC('210. Course Schedule II (Topo Sort)', 'course-schedule-ii', 'medium'),
      LC('787. Cheapest Flights Within K Stops', 'cheapest-flights-within-k-stops', 'medium'),
      LC('1584. Min Cost to Connect All Points', 'min-cost-to-connect-all-points', 'medium'),
      LC('269. Alien Dictionary', 'alien-dictionary', 'hard')
    ]},
    unionfind: { lc: [
      LC('547. Number of Provinces', 'number-of-provinces', 'medium'),
      LC('684. Redundant Connection', 'redundant-connection', 'medium'),
      LC('323. Number of Connected Components', 'number-of-connected-components-in-an-undirected-graph', 'medium'),
      LC('721. Accounts Merge', 'accounts-merge', 'medium'),
      LC('1319. Number of Operations to Make Network Connected', 'number-of-operations-to-make-network-connected', 'medium')
    ]},

    /* ---------- নতুন: complete coverage ---------- */
    prefixsum: { lc: [
      LC('303. Range Sum Query - Immutable', 'range-sum-query-immutable', 'easy'),
      LC('560. Subarray Sum Equals K', 'subarray-sum-equals-k', 'medium'),
      LC('238. Product of Array Except Self', 'product-of-array-except-self', 'medium'),
      LC('525. Contiguous Array', 'contiguous-array', 'medium'),
      LC('974. Subarray Sums Divisible by K', 'subarray-sums-divisible-by-k', 'medium'),
      LC('304. Range Sum Query 2D', 'range-sum-query-2d-immutable', 'medium')
    ]},
    monotonicstack: { lc: [
      LC('496. Next Greater Element I', 'next-greater-element-i', 'easy'),
      LC('739. Daily Temperatures', 'daily-temperatures', 'medium'),
      LC('503. Next Greater Element II', 'next-greater-element-ii', 'medium'),
      LC('901. Online Stock Span', 'online-stock-span', 'medium'),
      LC('84. Largest Rectangle in Histogram', 'largest-rectangle-in-histogram', 'hard'),
      LC('42. Trapping Rain Water', 'trapping-rain-water', 'hard')
    ]},
    stringmatching: { lc: [
      LC('28. Find the Index of the First Occurrence', 'find-the-index-of-the-first-occurrence-in-a-string', 'easy'),
      LC('459. Repeated Substring Pattern', 'repeated-substring-pattern', 'easy'),
      LC('686. Repeated String Match', 'repeated-string-match', 'medium'),
      LC('1392. Longest Happy Prefix', 'longest-happy-prefix', 'hard'),
      LC('214. Shortest Palindrome', 'shortest-palindrome', 'hard')
    ]},
    mathalgo: { lc: [
      LC('204. Count Primes', 'count-primes', 'medium'),
      LC('50. Pow(x, n)', 'powx-n', 'medium'),
      LC('1979. Find Greatest Common Divisor of Array', 'find-greatest-common-divisor-of-array', 'easy'),
      LC('326. Power of Three', 'power-of-three', 'easy'),
      LC('372. Super Pow', 'super-pow', 'medium'),
      LC('29. Divide Two Integers', 'divide-two-integers', 'medium')
    ]},
    mst: { lc: [
      LC('1584. Min Cost to Connect All Points', 'min-cost-to-connect-all-points', 'medium'),
      LC('1135. Connecting Cities With Minimum Cost', 'connecting-cities-with-minimum-cost', 'medium'),
      LC('1168. Optimize Water Distribution', 'optimize-water-distribution-in-a-village', 'hard')
    ]},
    segmenttree: { lc: [
      LC('307. Range Sum Query - Mutable', 'range-sum-query-mutable', 'medium'),
      LC('315. Count of Smaller Numbers After Self', 'count-of-smaller-numbers-after-self', 'hard'),
      LC('327. Count of Range Sum', 'count-of-range-sum', 'hard'),
      LC('493. Reverse Pairs', 'reverse-pairs', 'hard'),
      LC('218. The Skyline Problem', 'the-skyline-problem', 'hard')
    ]},

    /* ---------- ক্যারিয়ার স্কিল ---------- */
    cloud: { ex: [
      'AWS বা Azure-এ একটি ফ্রি অ্যাকাউন্ট খুলুন (Free Tier)।',
      'একটি EC2 (বা Azure VM) ইনস্ট্যান্স চালু করে SSH দিয়ে সংযোগ করুন।',
      'একটি S3 bucket (বা Azure Blob container) বানিয়ে একটি ফাইল আপলোড করুন।',
      'boto3 দিয়ে Python থেকে S3-তে ফাইল লিস্ট করার একটি স্ক্রিপ্ট লিখুন।',
      'AZ-900 (Azure) বা AWS Cloud Practitioner সিলেবাস একবার পড়ুন।'
    ]},
    git: { ex: [
      'একটি নতুন রিপো init করে ৩টি commit বানান, তারপর git log দেখুন।',
      'একটি feature branch বানিয়ে পরিবর্তন করে main-এ merge করুন।',
      'ইচ্ছাকৃতভাবে একটি merge conflict তৈরি করে সমাধান করুন।',
      'GitHub-এ একটি রিপো বানিয়ে লোকাল কোড push করুন।',
      'ইন্টারঅ্যাক্টিভ অনুশীলন: learngitbranching.js.org (ব্রাউজারে git শিখুন)।'
    ]},
    softwaredesign: { ex: [
      'একটি বড় ক্লাসকে Single Responsibility মেনে ভেঙে লিখুন।',
      'Factory pattern দিয়ে ৩ ধরনের Shape (Circle/Square/Triangle) object বানান।',
      'Observer pattern দিয়ে একটি weather-station → display মডেল লিখুন।',
      'তোমার আগের কোনো কোডে DRY লঙ্ঘন খুঁজে রিফ্যাক্টর করুন।',
      'একটি URL shortener-এর high-level system design কাগজে আঁকুন।'
    ]},

    /* ---------- পরে যোগ হওয়া সেকশনের practice ---------- */
    concurrency: { lc: [
      LC('1114. Print in Order', 'print-in-order', 'easy'),
      LC('1115. Print FooBar Alternately', 'print-foobar-alternately', 'medium'),
      LC('1116. Print Zero Even Odd', 'print-zero-even-odd', 'medium'),
      LC('1117. Building H2O', 'building-h2o', 'medium'),
      LC('1226. The Dining Philosophers', 'the-dining-philosophers', 'medium')
    ], ex: [
      'threading দিয়ে ৩টি ফাইল একসাথে "ডাউনলোড" করুন (time.sleep দিয়ে নকল)।',
      'asyncio + asyncio.gather দিয়ে ১০টি async কাজ সমান্তরালে চালান।',
      'একটি shared counter-এ Lock ব্যবহার করে race condition ঠিক করুন।'
    ]},
    regex: { lc: [
      LC('8. String to Integer (atoi)', 'string-to-integer-atoi', 'medium'),
      LC('468. Validate IP Address', 'validate-ip-address', 'medium'),
      LC('65. Valid Number', 'valid-number', 'hard'),
      LC('10. Regular Expression Matching', 'regular-expression-matching', 'hard'),
      LC('44. Wildcard Matching', 'wildcard-matching', 'hard')
    ], ex: [
      'একটি regex লিখুন যা বাংলাদেশি ফোন নম্বর (01XXXXXXXXX) যাচাই করে।',
      're.findall দিয়ে একটি টেক্সট থেকে সব ইমেইল বের করুন।',
      're.sub দিয়ে একাধিক স্পেসকে একটি স্পেসে পরিণত করুন।'
    ]},
    testing: { ex: [
      'তোমার লেখা factorial() ফাংশনের জন্য ৫টি pytest test লিখুন (edge case সহ)।',
      'একটি ফাংশন যা ValueError তোলে — pytest.raises দিয়ে test করুন।',
      '@pytest.mark.parametrize দিয়ে এক test-এ ৫টি ইনপুট যাচাই করুন।',
      'TDD অনুশীলন: আগে test লিখে তারপর is_palindrome() বানান।'
    ]},
    pypractical: { ex: [
      'একটি JSON ফাইল পড়ে সবচেয়ে বেশি বয়সী ব্যক্তির নাম বের করুন।',
      'একটি CSV ফাইল পড়ে প্রতিটি কলামের গড় হিসাব করুন।',
      'একটি প্রোগ্রামকে module + main.py তে ভাগ করে import করে চালান।',
      'logging দিয়ে একটি স্ক্রিপ্টে INFO ও ERROR লেভেলের লগ যোগ করুন।'
    ]},
    systemdesign: { ex: [
      'Design TinyURL — requirement, API, DB schema, scaling কাগজে আঁকুন।',
      'Design Twitter feed — fan-out (push vs pull) ব্যাখ্যা করুন।',
      'Design একটি Rate Limiter (token bucket) — Redis দিয়ে।',
      'Design WhatsApp — WebSocket, message delivery, online status।',
      'Design একটি Parking Lot system (OOP + class design)।'
    ]},
    os: { ex: [
      'Process ও Thread-এর ৩টি পার্থক্য নিজের ভাষায় লিখুন।',
      'Deadlock-এর ৪টি শর্ত (Coffman) ও কীভাবে একটি ভাঙবেন ব্যাখ্যা করুন।',
      'Round Robin ও SJF scheduling-এর জন্য একটি উদাহরণে গড় waiting time হিসাব করুন।',
      'Producer-Consumer সমস্যা semaphore দিয়ে সমাধান করুন (pseudo/Python)।'
    ]},
    networks: { ex: [
      '"google.com টাইপ করলে কী হয়" — সব ধাপ নিজে লিখুন।',
      'TCP ও UDP-র ৩টি পার্থক্য ও কখন কোনটা ব্যবহার হয় লিখুন।',
      'HTTP status code (200/301/404/500) এর অর্থ ও উদাহরণ দিন।',
      'একটি REST API ডিজাইন করুন (GET/POST/PUT/DELETE endpoint সহ)।'
    ]},
    behavioral: { ex: [
      'STAR ফরম্যাটে ৫টি গল্প তৈরি করুন: চ্যালেঞ্জ, conflict, ব্যর্থতা, নেতৃত্ব, deadline।',
      '"নিজের সম্পর্কে বলুন" — ২ মিনিটের একটি উত্তর লিখে অনুশীলন করুন।',
      '"সবচেয়ে কঠিন প্রজেক্ট" — STAR দিয়ে গুছিয়ে লিখুন।',
      'একটি ব্যর্থতা ও তা থেকে শেখা — দায়িত্ব নিয়ে ইতিবাচকভাবে বলুন।'
    ]}
  };

  function buildBlock(data) {
    const wrap = document.createElement("div");
    wrap.className = "note practice";
    let html = '<span class="tag">📝 অনুশীলন — সমজাতীয় সমস্যা</span>';
    if (data.lc && data.lc.length) {
      html += '<ul class="lc-list">';
      for (const p of data.lc) {
        html += `<li><a href="https://leetcode.com/problems/${p.u}/" target="_blank" rel="noopener">${p.n}</a><span class="diff ${p.d}">${p.d[0].toUpperCase() + p.d.slice(1)}</span></li>`;
      }
      html += '</ul>';
    }
    if (data.ex && data.ex.length) {
      if (data.lc) html += '<p style="margin:12px 0 2px;color:var(--text-dim);font-size:13px;">✍️ নিজে কোড করার অনুশীলন:</p>';
      html += '<ul class="ex-list">';
      for (const e of data.ex) html += `<li>${e}</li>`;
      html += '</ul>';
    }
    wrap.innerHTML = html;
    return wrap;
  }

  for (const id in PRACTICE) {
    try {
      const section = document.getElementById(id);
      if (!section) continue;
      const block = buildBlock(PRACTICE[id]);
      const nav = section.querySelector(".page-nav");
      // bn: nav.parentNode দিয়ে insert -> page-nav direct child না হলেও কাজ করে
      if (nav && nav.parentNode) nav.parentNode.insertBefore(block, nav);
      else section.appendChild(block);
    } catch (e) { /* এক সেকশন ব্যর্থ হলেও বাকিগুলো চলবে */ }
  }
})();
