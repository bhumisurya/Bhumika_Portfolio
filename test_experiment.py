import os, sys
sys.path.append(os.path.join(os.getcwd(),'KNN_Hyperparameter_Tuning'))
from knn_experiment import run_experiment

result = run_experiment(k_values=[3,5,7], cv_folds=3, test_size=0.2, random_state=42)
print('Best k:', result['best_k'])
print('Test accuracy:', result['test_accuracy'])
print('Test macro F1:', result['test_f1_macro'])
