from sklearn import svm, metrics, datasets, model_selection
import tensorflow as tf
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

iris = datasets.load_iris()
X_train, X_test, Y_train, Y_test = model_selection.train_test_split(
    iris.data,
    iris.target,
    test_size=0.6,
    random_state=42
)

svm = svm.SVC(kernel='linear', C=1.0, gamma=0.5)