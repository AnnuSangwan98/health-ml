import pickle

def getHeartModel():
    with open('./models/heartModel.pkl', 'rb') as f:
        model = pickle.load(f)
    return model
