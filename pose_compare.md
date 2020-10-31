# 자세 비교 기능 설명
![squat](./data/img/squat_demo_gifver.gif)


## 입력 데이터 값
Posenet 모델을 통해 추출한 Pose 데이터를 기반으로 자세 비교를 하게 된다. 좋은 자세 즉 기준이 되는 자세 데이터와 사용자의 자세 데이터를 받아오게 된다.

## 2.포즈 비교
pose similiary 의 라이브러리를 통해 두개의 포즈 데이터를 비교하게 된다. 단 영상데이터를 통해 추출한 포즈이다. 그러므로 일련의 배열 포즈데이터들이 들어오게된다. 비교에는 3가지 방법을 선택할 수 있다. 'weightedDistance' | 'cosineDistance' | 'cosineSimilarity'
이 있다. 3가지 실험결과 weightedDistanc일시 가장 유의미한 결과를 도출하는것을 확인하여 weightedDistance 선택했다. (weightedDistance사진) 두개의 영상의 좌표간의 절대거리에 가중치를 곱해 절대거리가 작을수록 높은 점수를 주도록 한다.

## 3.점수 계산
포즈 비교를 통해 나온 점수값을 threshold 값보다 낮을시 기준 영상과는 다르다고 프레임별로 판별한다. 이렇게 추출된 기준 영상과 다른 프레임들의 갯수와 가중치를 연산해 score를 도출한다.

