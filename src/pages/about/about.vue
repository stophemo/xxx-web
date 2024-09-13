<route lang="json5">
{
  style: {
    navigationBarTitleText: '关于',
  },
}
</route>

<template>
  <view class="page-container">
    <!-- 搜索区块 -->
    <view class="search-section">
      <view class="search-header">
        <text class="search-title">Hey, I'm Alex</text>
        <text class="search-description">
          I am a software engineer, YouTuber, and creator. This is my digital garden, where I grow
          ideas and share what I learn. Explore the site to see videos, blog posts, resources, and
          more!
        </text>
      </view>
      <view class="search-box">
        <view class="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path
              d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
            ></path>
          </svg>
        </view>
        <input type="text" class="search-input" placeholder="Search..." v-model="searchTerm" />
        <button class="search-button" @click="onSearch">Go</button>
      </view>
    </view>

    <!-- Featured Content 区块 -->
    <view class="content-section">
      <text class="section-title">Featured Content</text>
      <view class="content-grid">
        <view v-for="(item, index) in featuredContent" :key="index" class="content-card">
          <image :src="item.image" mode="aspectFill" class="content-image" />
          <view class="content-info">
            <text class="content-title">{{ item.title }}</text>
            <text class="content-subtitle">{{ item.source }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- Resources 区块 -->
    <view class="content-section">
      <text class="section-title">Resources</text>
      <view class="content-grid">
        <view v-for="(item, index) in resources" :key="index" class="content-card">
          <image :src="item.image" mode="aspectFill" class="content-image" />
          <view class="content-info">
            <text class="content-title">{{ item.title }}</text>
            <text class="content-subtitle">{{ item.source }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- Recent Posts 区块 -->
    <view class="content-section">
      <text class="section-title">Recent Posts</text>
      <view class="content-grid">
        <view v-for="(item, index) in recentPosts" :key="index" class="content-card">
          <image :src="item.image" mode="aspectFill" class="content-image" />
          <view class="content-info">
            <text class="content-title">{{ item.title }}</text>
            <text class="content-subtitle">{{ item.source }}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface ContentItem {
  title: string
  source: string
  image: string
}

const searchTerm = ref('')

const featuredContent: ContentItem[] = [
  {
    title: 'How to Learn Anything... Fast - Josh Kaufman',
    source: 'TED',
    image: 'https://cdn.usegalileo.ai/stability/f3f8272c-7d5b-451f-b776-f0c23c3c8392.png',
  },
  {
    title: 'How to Learn Anything... Fast - Josh Kaufman',
    source: 'TED',
    image: 'https://cdn.usegalileo.ai/stability/55fa4161-8e27-4ad3-8cbf-b1bd2498665d.png',
  },
  {
    title: 'How to Learn Anything... Fast - Josh Kaufman',
    source: 'TED',
    image: 'https://cdn.usegalileo.ai/stability/e1e69bfa-cc7a-4a5c-a202-1df3f37e1f63.png',
  },
  {
    title: 'How to Learn Anything... Fast - Josh Kaufman',
    source: 'TED',
    image: 'https://cdn.usegalileo.ai/stability/203b7c9f-bf46-42c9-b1cf-00f0bbeb82fb.png',
  },
]

const resources: ContentItem[] = [
  {
    title: 'How to Learn Anything... Fast - Josh Kaufman',
    source: 'TED',
    image: 'https://cdn.usegalileo.ai/stability/6e34d604-c5c8-466c-b531-06d4532401da.png',
  },
  {
    title: 'How to Learn Anything... Fast - Josh Kaufman',
    source: 'TED',
    image: 'https://cdn.usegalileo.ai/stability/a2c2e1c7-c5c3-4bba-9285-df379b849c9e.png',
  },
  {
    title: 'How to Learn Anything... Fast - Josh Kaufman',
    source: 'TED',
    image: 'https://cdn.usegalileo.ai/stability/8d31d915-30c9-4eea-bf5d-adf9754ddc40.png',
  },
  {
    title: 'How to Learn Anything... Fast - Josh Kaufman',
    source: 'TED',
    image: 'https://cdn.usegalileo.ai/stability/12769429-b71a-490c-803e-0e79bdb40043.png',
  },
]

const recentPosts: ContentItem[] = [
  {
    title: 'How to Learn Anything... Fast - Josh Kaufman',
    source: 'TED',
    image: 'https://cdn.usegalileo.ai/stability/08722f0f-9469-44fc-8d44-6aee6f92d468.png',
  },
  {
    title: 'How to Learn Anything... Fast - Josh Kaufman',
    source: 'TED',
    image: 'https://cdn.usegalileo.ai/stability/5c7a8684-2b8e-4e4c-a5c2-72dcada82676.png',
  },
  {
    title: 'How to Learn Anything... Fast - Josh Kaufman',
    source: 'TED',
    image: 'https://cdn.usegalileo.ai/stability/258a9e53-2919-43dc-92ac-1954da12cd48.png',
  },
  {
    title: 'How to Learn Anything... Fast - Josh Kaufman',
    source: 'TED',
    image: 'https://cdn.usegalileo.ai/stability/21c82aa5-cfa9-42dc-add7-675756874042.png',
  },
]

const onSearch = () => {
  console.log(`Searching for: ${searchTerm.value}`)
}
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
}

.search-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 960px;
  padding: 20px;
  color: white;
  text-align: left;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%),
    url('https://cdn.usegalileo.ai/stability/a1604457-b791-4e83-a203-83f9f6b0b2f1.png');
  background-size: cover;
}

.search-header {
  margin-bottom: 20px;
}

.search-title {
  font-size: 28px;
  font-weight: bold;
}

.search-description {
  margin-top: 10px;
  font-size: 18px;
}

.search-box {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.search-icon {
  margin-right: 10px;
}

.search-input {
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
}

.search-button {
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  background-color: #6200ea;
  border: none;
  border-radius: 4px;
}

.search-button:hover {
  background-color: #3700b3;
}
/* Content 区块样式 */
.content-section {
  width: 100%;
  max-width: 960px;
  margin-top: 40px;
}

.section-title {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.content-card {
  overflow: hidden;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
}

.content-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.content-info {
  padding: 15px;
}

.content-title {
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
}

.content-subtitle {
  font-size: 14px;
  color: #888;
}
</style>
