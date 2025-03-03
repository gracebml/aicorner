---
layout: post
title: "Cơ bản về học máy và ứng dụng thực tế"
date: 2023-03-06
categories: [Machine Learning]
tags: [machine learning, algorithms, regression, classification]
excerpt: "Tìm hiểu những khái niệm cơ bản về Machine Learning và cách áp dụng những kỹ thuật này vào các bài toán thực tế."
---

Học máy (Machine Learning) là một lĩnh vực của trí tuệ nhân tạo (AI) tập trung vào việc phát triển các hệ thống có khả năng học hỏi từ dữ liệu và cải thiện hiệu suất của chúng theo thời gian mà không cần lập trình rõ ràng. Trong bài viết này, chúng ta sẽ khám phá những khái niệm cơ bản về học máy và cách áp dụng chúng vào các bài toán thực tế.

## Học máy là gì?

Học máy là quá trình máy tính "học" từ dữ liệu để thực hiện các nhiệm vụ mà không được lập trình cụ thể. Thay vì viết mã chi tiết cho mọi tình huống có thể xảy ra, máy tính được huấn luyện trên dữ liệu và sử dụng các thuật toán để tìm ra các mẫu và đưa ra dự đoán hoặc quyết định.

Có ba loại học máy chính:

- **Học có giám sát (Supervised Learning):** Mô hình được huấn luyện trên dữ liệu đã được gắn nhãn, nghĩa là mỗi ví dụ trong dữ liệu đã có câu trả lời chính xác.
- **Học không giám sát (Unsupervised Learning):** Mô hình làm việc với dữ liệu không có nhãn và cố gắng tìm ra cấu trúc hoặc mẫu ẩn.
- **Học tăng cường (Reinforcement Learning):** Mô hình học thông qua thử và sai, nhận phần thưởng hoặc hình phạt tùy thuộc vào kết quả của các hành động của nó.

## Các thuật toán học máy cơ bản

### 1. Hồi quy tuyến tính (Linear Regression)

Hồi quy tuyến tính là một thuật toán học có giám sát được sử dụng để dự đoán một giá trị liên tục dựa trên một hoặc nhiều biến đầu vào. Ý tưởng là tìm một đường thẳng (hoặc siêu phẳng trong không gian nhiều chiều) phù hợp nhất với dữ liệu.

Ví dụ: Dự đoán giá nhà dựa trên diện tích, số phòng ngủ và vị trí.

```python
from sklearn.linear_model import LinearRegression
import numpy as np

# Dữ liệu: diện tích (m2)
X = np.array([[50], [75], [100], [125], [150]])
# Giá nhà (triệu đồng)
y = np.array([1500, 2000, 2500, 3000, 3500])

# Tạo mô hình và huấn luyện
model = LinearRegression()
model.fit(X, y)

# Dự đoán giá nhà có diện tích 110m2
predicted_price = model.predict([[110]])
print(f"Giá dự đoán: {predicted_price[0]} triệu đồng")