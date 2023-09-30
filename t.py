test = ['WEBVTT\r', '\r', '00:00:31.460 --> 00:00:33.100\r', '♪ ดนตรีแห่งการผจญภัย ♪\r','00:01:43.860 --> 00:01:50.140\r', '♪การเริ่มต้นใหม่อยู่ที่นี่♪\r', '\r', '00:01:51.700 --> 00:02:02.020\r', '[เชฟมหัศจรรย์แห่งน้ำแข็งและไฟ S2]\r',]
result = []


for i,k in enumerate(test):
    test[i] = test[i].replace('\r', '\n').replace('.',',')
    if k.startswith('00'):
        result.append(''.join(str(e) for e in test[i:i+2])+"\n")

print(result)
