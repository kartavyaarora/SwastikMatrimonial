import cv2
from cv2 import VideoCapture
from simple_facerec import SimpleFacerec

cap=cv2.VideoCapture(0)

sfr=SimpleFacerec()
sfr.load_encoding_images("images/")

while True:
    ret,frame=cap.read()
    #DEtect faces
    face_locations,face_names=sfr.detect_known_faces(frame)
    for face_loc,name in zip(face_locations,face_names):
        top,left,bottom,right=face_loc[0],face_loc[1],face_loc[2],face_loc[3]
        cv2.putText(frame,name,(right,top-10),cv2.FONT_HERSHEY_DUPLEX,1,(0,0,200),2)
        cv2.rectangle(frame,(left,top),(right,bottom),(0,0,200),4)
    cv2.imshow("Frame",frame)
    key=cv2.waitKey(1)
    if key==27:
        break
cap.release()
cv2.destroyAllWindows()