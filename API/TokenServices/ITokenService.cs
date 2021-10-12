using API.Entities;

namespace API.TokenServices
{
    public interface ITokenService
    {
         string CreateToken(AppUser user);
    }
}