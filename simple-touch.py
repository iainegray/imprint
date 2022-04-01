# This code is modified from existing code provided by Bare Conductive

from time import sleep
import MPR121
from glob import glob
from pydub import AudioSegment
from pydub.playback import play

try:
  sensor = MPR121.begin()
except Exception as e:
  print (e)
  sys.exit(1)

# this is the touch threshold - setting it low makes it more like a proximity trigger default value is 40 for touch
touch_threshold = 40

# this is the release threshold - must ALWAYS be smaller than the touch threshold default value is 20 for touch
release_threshold = 20

# set the thresholds
sensor.set_touch_threshold(touch_threshold)
sensor.set_release_threshold(release_threshold)

# set variable 'data' to 0. This is what will be sent to the express server.
data = 0

# While loop to detect that the sensor has been touched. Variable i is equal to the number of the sensor.

running = True
while running:
  try:
    if sensor.touch_status_changed():
      sensor.update_touch_data()
      for i in range(12):
        # When sensor is touched, script will print 'data' variable, now set to equal value of i, to the console
        if sensor.is_new_touch(i):
          data = i
          print (data, flush = True)
          #plays a sound track using pydub
          sound = AudioSegment.from_wav("/tracks/" + "TRACK00" + str(i) + ".wav")
          play (sound)
          # Here, the played sound causes the script to output a 'null' boolean to the server. By printing 'data' again, this prevents the HTML page from erroring. 
          print (data, flush = True)
    sleep(0.01)
  except KeyboardInterrupt:
    running = False

    
 
