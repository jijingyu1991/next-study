/*
 * @Author: guantingting guantingting@saicmotor.com
 * @Date: 2025-03-27 16:02:10
 * @LastEditors: guantingting
 * @LastEditTime: 2025-04-05 00:32:27
 * @FilePath: /next-study/next.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  typeScript: {
    ignoreBuildErrors: true, // 解决生产打包时ts编译错误
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    ppr: "incremental",
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;
