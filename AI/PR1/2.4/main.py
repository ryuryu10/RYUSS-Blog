import pandas as pd
import numpy as np
import tensorflow as tf
import matplotlib.pyplot as plt
import seaborn as sns
sns.set(style="darkgrid")

cols = ['price', 'maint' ,'doors', 'persons', 'lug_capacity', 'safety', 'output']
cars = pd.read_csv("./car_evaluation.csv", names=cols, header=None) #csv에는 header가 설정되어있지 않음.

plot_size = plt.rcParams["figure.figsize"]
plot_size[0] = 8
plot_size[1] = 6
plt.rcParams["figure.figsize"] = plot_size
cars.output.value_counts().plot(
        kind='pie',
        autopct='%0.05f%%',
        colors=['lightblue', 'lightgreen', 'orange', 'pink'],
        explode=(0.05,0.05,0.05,0.05)
    )

price = pd.get_dummies(cars.price, prefix='price')
maint = pd.get_dummies(cars.maint, prefix='maint')
doors = pd.get_dummies(cars.doors, prefix='doors')
persons = pd.get_dummies(cars.persons, prefix='persons')
lug_capacity = pd.get_dummies(cars.lug_capacity, prefix='lug_capacity')
safety = pd.get_dummies(cars.safety, prefix='safety')
labels = pd.get_dummies(cars.output, prefix='condition')
# 문자 -> 숫자(0, 1)로 바꾸어주는 가변수역할을 한다

X = pd.concat([price, maint ,doors, persons, lug_capacity, safety], axis=1) #concat()를 이용해 병합
y = labels.values #레이블을 넘파이로 변환

from sklearn.model_selection import train_test_split
X_train, X_test, Y_train, Y_test = train_test_split(X, y, test_size=0.20, random_state=42) #훈련, 검증 분리

from tensorflow import keras
from keras.layers import Input, Dense, Activation, Dropout
from keras.models import Model

input_layer = Input(shape=(X.shape[1],))
dense_layer_1 = Dense(15, activation='relu')(input_layer)
dense_layer_2 = Dense(10, activation='relu')(dense_layer_1)
output = Dense(y.shape[1], activation='softmax')(dense_layer_2)

model = Model(inputs=input_layer, outputs=output)

model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['acc'])
model.summary()

history = model.fit(X_train, Y_train, batch_size=8, epochs=50, verbose=1, validation_split=0.2)

score = model.evaluate(X_test, Y_test, verbose=1)
print(score[0], score[1])