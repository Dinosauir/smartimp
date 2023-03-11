import axios from "axios";
import bluebird from "bluebird";
import * as redis from "redis";

const axiosCacheCall = async (cacheKey, url, options) => {
  bluebird.promisifyAll(redis.RedisClient.prototype);
  const redisUrl = "//" + process.env.REDIS_URL + ":" + process.env.REDIS_PORT;
  const cache = redis.createClient({
    url: redisUrl,
  });

  let data = {};

  await cache.existsAsync(cacheKey).then(async (reply) => {
    if (reply !== 1) {
      const response = await axios.get(url, options);

      data = response.data;
      await cache.setex(cacheKey, 7200, JSON.stringify(data));
      console.log("cache refresh");

      return;
    }

    console.log("loaded from cache");
    data = JSON.parse(await cache.getAsync(cacheKey));
  });

  return data;
};

export default axiosCacheCall;
