// Special thanks to GreaserPirate for the C-compatible drums
// best with 8507

(t>131051?((t>>9&1+t>>12&7?0:9001/(t%4096)-t/9&8?-1:2)^t>>4):t>>9)&t*(t>>7|t>>2)