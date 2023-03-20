import React, { ReactElement, useEffect, useState } from 'react';
import { ShareIcon } from '@shared/icons/share-icon/share-icon';
import { Button } from '@shared/components/button/button';
import { useEncoding } from '@shared/hooks/encoding/encoding';
import { ShortenLinkResponse } from '@editor/components/share-button/types/shorten-link-response';

interface ShareButtonProps {
  readonly code: string;
}

export const ShareButton = (props: ShareButtonProps): ReactElement => {
  const { encode } = useEncoding();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const shortenLink = (url: string): Promise<ShortenLinkResponse> =>
    fetch('https://shorten.wilenskid.pl/api/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url,
      }),
    }).then((response) => response.json());

  const handleClick = async (): Promise<void> => {
    setIsLoading(true);
    const encodedCodeStr = encode(props.code);
    const codeParamValue = encodeURIComponent(encodedCodeStr);
    const targetUrl = `${window.location.href}?code=${codeParamValue}`;
    const shortenUrl = await shortenLink(targetUrl);
    await navigator.clipboard.writeText(shortenUrl.url);
    setIsLoading(false);
    setIsCopied(true);
  };

  useEffect(() => {
    setTimeout(() => setIsCopied(false), 1000);
  }, [isCopied]);

  return (
    <Button
      icon={<ShareIcon width="0.8rem" height="0.8rem" />}
      label="Share"
      onClick={handleClick}
      isLoading={isLoading}
      isCopied={isCopied}
    />
  );
};
