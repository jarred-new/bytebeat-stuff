a=[(random()%t)*1000,random()*2000,random()*3000,random()*4000,random()*5000,random()*6000,random()*7000,6759],
b=[5492,7959,5883,5443,5694,5392,5927,4836],

f=a[t>>12&a.length-1],
f2=b[t>>10&b.length-1],

a1=cos(sin(t*f/512))*exp(-(t&4095)/700),
a2=cos(sin(t*f/55))*exp(-(t&4095)/800),

[tan(a1+a2/t)%t*10, sin(a1+a2)%t*100]