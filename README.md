# AMA: The Animal Monitoring Association
This project uses Audio Classification techniques to classify animal sounds, and we are using it to protect travelers before visiting wildlife areas, to warn them of wild animals that might pose danger. It can also be used in wildlife sanctuaries and forests for animal behavior analysis

# How we built it

## Backend
We have used over 1000 audio files to train our model. We used pytorch to transform and augment our data using rechannlizing, resampling, padding margins, and timeshifting our audio tensors, and then extracting their features in the form of mel spectrograms, and augmented them further, before feeding them into our multi-layered CNN to retrieve a feature map tensor, which was fed into a linear classifier model to finally train a highly accurate model which detects various animal sounds ith near perfect accuracy.

## Frontend
This webapp was created using Django, Machine learning and UDP.This website uses a locally running machine learning model which takes the microphone capture of a designated area and idenifies if dangerous animals are present.

## Challenges we ran into
- The transfer and processing of Audio Data was a challenge, since the audio dataset we used was in a different language as well as unorganized.
Accomplishments that we're proud of
- The model we have created is highly accurate, mainly due to the fact that we have used state-of-the-art techniques to process our audio data and augmenting it multiple times.

## What we learned
- We learned how to process audio from scratch, and process it to be used in a complex machine learning model, use Convolutional Neural Networks and Linear Classifier NNs to process and classify image data, which is in fact the feature maps of mel spectogram extracted and augmented from the audio data.
- 
## What's next for AI Animal Surveillance System
- We can hugely scale this project, pair it with surveillance cameras and animal specific data such that it can be used for a very extensive animal behaviour research purpose, whether it is analysing patterns in groups of animals, or the behavioural patterns and insights in a specific breed of animal, and can be used by residents, travelers, researchers, vets, or just the average human.
Here is the code for the project
- Furthermore, Currently the Website is Static to use and the code needs to updated and refreshed before any changes are visible therefore, In future frameworks such as React can be used to make the website Reactive.

## Technologies used
-  css
-  django
-  html
- librosa
-  machine-learning
-  numpy
-  pandas
-  python
-  pytorch

